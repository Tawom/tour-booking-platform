import { NextRequest, NextResponse } from "next/server";
import dbConnect from "@/lib/mongodb";
import User from "@/models/User";

/**
 * POST /api/auth/register
 * Register a new user
 */
export async function POST(request: NextRequest) {
  try {
    // Connect to database
    await dbConnect();

    // Parse request body
    const body = await request.json();
    const { name, email, password } = body;

    // Sanitize inputs - trim whitespace
    const sanitizedName = name?.trim();
    const sanitizedEmail = email?.trim();

    // Validate required fields
    if (!sanitizedName || !sanitizedEmail || !password) {
      return NextResponse.json(
        { success: false, error: "Please provide all required fields" },
        { status: 400 }
      );
    }

    // Validate password length
    if (password.length < 6) {
      return NextResponse.json(
        { success: false, error: "Password must be at least 6 characters" },
        { status: 400 }
      );
    }

    // Check if user already exists
    const existingUser = await User.findOne({
      email: sanitizedEmail.toLowerCase(),
    });
    if (existingUser) {
      return NextResponse.json(
        { success: false, error: "Email already registered" },
        { status: 400 }
      );
    }

    // Create new user (password will be automatically hashed by pre-save hook)
    const user = await User.create({
      name: sanitizedName,
      email: sanitizedEmail.toLowerCase(),
      password, // This gets hashed automatically
    });

    // Return success response (don't send password back)
    return NextResponse.json(
      {
        success: true,
        message: "User registered successfully",
        user: {
          id: user._id,
          name: user.name,
          email: user.email,
        },
      },
      { status: 201 }
    );
  } catch (error: unknown) {
    // Handle mongoose validation errors (don't log sensitive data)
    if (error instanceof Error && error.name === "ValidationError") {
      return NextResponse.json(
        { success: false, error: "Invalid input data" },
        { status: 400 }
      );
    }

    // Handle duplicate key error (email already exists)
    if (error instanceof Error && "code" in error && error.code === 11000) {
      return NextResponse.json(
        { success: false, error: "Email already registered" },
        { status: 400 }
      );
    }

    // Generic error response (don't expose internal details)
    return NextResponse.json(
      { success: false, error: "Registration failed. Please try again." },
      { status: 500 }
    );
  }
}
