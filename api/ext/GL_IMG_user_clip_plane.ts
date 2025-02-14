/// This file is auto-generated. Do not edit.

/// Util
export type TypedArray =
  | Int8Array
  | Uint8Array
  | Int16Array
  | Uint16Array
  | Int32Array
  | Uint32Array
  | Float32Array
  | Float64Array;
export type Buffer = TypedArray | ArrayBuffer | null | Deno.PointerValue;

export function bufferToFFI(buf: Buffer): Uint8Array | null {
  if (buf === null) return null;
  else if (typeof buf === "number" || typeof buf === "bigint") {
    if (buf === 0 || buf === 0n) return null;
    return new Uint8Array(Deno.UnsafePointerView.getArrayBuffer(buf, 1));
  } else if (buf instanceof ArrayBuffer) {
    return new Uint8Array(buf);
  } else {
    return new Uint8Array(buf.buffer);
  }
}

/// Typedefs
export type GLenum = number;
export type GLboolean = number;
export type GLbitfield = number;
/** Not an actual GL type, though used in headers in the past */
export type GLvoid = void;
export type GLbyte = number;
export type GLubyte = number;
export type GLshort = number;
export type GLushort = number;
export type GLint = number;
export type GLuint = number;
export type GLclampx = number;
export type GLsizei = number;
export type GLfloat = number;
export type GLclampf = number;
export type GLdouble = number;
export type GLclampd = number;
export type GLeglClientBufferEXT = Buffer;
export type GLeglImageOES = Buffer;
export type GLchar = number;
export type GLcharARB = number;
export type GLhandleARB = Buffer;
export type GLhalf = number;
export type GLhalfARB = number;
export type GLfixed = number;
export type GLintptr = Buffer;
export type GLintptrARB = Buffer;
export type GLsizeiptr = Deno.PointerValue;
export type GLsizeiptrARB = Deno.PointerValue;
export type GLint64 = Deno.PointerValue;
export type GLint64EXT = Deno.PointerValue;
export type GLuint64 = Deno.PointerValue;
export type GLuint64EXT = Deno.PointerValue;
export type GLsync = Buffer;
export type GLDEBUGPROC = Buffer;
export type GLDEBUGPROCARB = Buffer;
export type GLDEBUGPROCKHR = Buffer;
export type GLDEBUGPROCAMD = Buffer;
export type GLhalfNV = number;
export type GLvdpauSurfaceNV = Buffer;
export type GLVULKANPROCNV = Buffer;

/// Enums
export const CLIP_PLANE0_IMG = 0x3000;
export const CLIP_PLANE1_IMG = 0x3001;
export const CLIP_PLANE2_IMG = 0x3002;
export const CLIP_PLANE3_IMG = 0x3003;
export const CLIP_PLANE4_IMG = 0x3004;
export const CLIP_PLANE5_IMG = 0x3005;
export const MAX_CLIP_PLANES_IMG = 0xd32;

/// Commands

export const def_glClipPlanefIMG = {
  parameters: ["u32", "buffer"],
  result: "void",
} as const;

let fn_glClipPlanefIMG!: Deno.UnsafeFnPointer<typeof def_glClipPlanefIMG>;

export function ClipPlanefIMG(
  p: GLenum,
  eqn: Buffer,
): void {
  fn_glClipPlanefIMG.call(
    p,
    bufferToFFI(eqn),
  );
}

export const def_glClipPlanexIMG = {
  parameters: ["u32", "buffer"],
  result: "void",
} as const;

let fn_glClipPlanexIMG!: Deno.UnsafeFnPointer<typeof def_glClipPlanexIMG>;

export function ClipPlanexIMG(
  p: GLenum,
  eqn: Buffer,
): void {
  fn_glClipPlanexIMG.call(
    p,
    bufferToFFI(eqn),
  );
}

/** Loads all OpenGL API function pointers. */
export function load(proc: (name: string) => Deno.PointerValue): void {
  fn_glClipPlanefIMG = new Deno.UnsafeFnPointer(
    proc("glClipPlanefIMG"),
    def_glClipPlanefIMG,
  );
  fn_glClipPlanexIMG = new Deno.UnsafeFnPointer(
    proc("glClipPlanexIMG"),
    def_glClipPlanexIMG,
  );
}
