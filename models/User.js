import mongoose from "mongoose";

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      unique: true,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: ["costumer", "operator", "admin"],
      default: "costumer",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

// userSchema.pre("save", async function () {
//   if (!this.isModified("password")) return; // hanya kalau password berubah
//   const salt = await bcrypt.genSalt(10);
//   this.password = await bcrypt.hash(this.password, salt);
// });

export default mongoose.model("User", userSchema);
