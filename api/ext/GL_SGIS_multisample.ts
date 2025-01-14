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
export const MULTISAMPLE_SGIS = 0x809d;
export const SAMPLE_ALPHA_TO_MASK_SGIS = 0x809e;
export const SAMPLE_ALPHA_TO_ONE_SGIS = 0x809f;
export const SAMPLE_MASK_SGIS = 0x80a0;
export const GL_1PASS_SGIS = 0x80a1;
export const GL_2PASS_0_SGIS = 0x80a2;
export const GL_2PASS_1_SGIS = 0x80a3;
export const GL_4PASS_0_SGIS = 0x80a4;
export const GL_4PASS_1_SGIS = 0x80a5;
export const GL_4PASS_2_SGIS = 0x80a6;
export const GL_4PASS_3_SGIS = 0x80a7;
export const SAMPLE_BUFFERS_SGIS = 0x80a8;
export const SAMPLES_SGIS = 0x80a9;
export const SAMPLE_MASK_VALUE_SGIS = 0x80aa;
export const SAMPLE_MASK_INVERT_SGIS = 0x80ab;
export const SAMPLE_PATTERN_SGIS = 0x80ac;

/// Commands

export const def_glSampleMaskSGIS = {
  parameters: ["f32", "u8"],
  result: "void",
} as const;

let fn_glSampleMaskSGIS!: Deno.UnsafeFnPointer<typeof def_glSampleMaskSGIS>;

export function SampleMaskSGIS(
  value: GLclampf,
  invert: GLboolean,
): void {
  fn_glSampleMaskSGIS.call(
    value,
    invert,
  );
}

export const def_glSamplePatternSGIS = {
  parameters: ["u32"],
  result: "void",
} as const;

let fn_glSamplePatternSGIS!: Deno.UnsafeFnPointer<
  typeof def_glSamplePatternSGIS
>;

export function SamplePatternSGIS(
  pattern: GLenum,
): void {
  fn_glSamplePatternSGIS.call(
    pattern,
  );
}

/** Loads all OpenGL API function pointers. */
export function load(proc: (name: string) => Deno.PointerValue): void {
  fn_glSampleMaskSGIS = new Deno.UnsafeFnPointer(
    proc("glSampleMaskSGIS"),
    def_glSampleMaskSGIS,
  );
  fn_glSamplePatternSGIS = new Deno.UnsafeFnPointer(
    proc("glSamplePatternSGIS"),
    def_glSamplePatternSGIS,
  );
}
