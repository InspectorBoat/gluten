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
export const MAX_COLOR_ATTACHMENTS_EXT = 0x8cdf;
export const MAX_DRAW_BUFFERS_EXT = 0x8824;
export const DRAW_BUFFER0_EXT = 0x8825;
export const DRAW_BUFFER1_EXT = 0x8826;
export const DRAW_BUFFER2_EXT = 0x8827;
export const DRAW_BUFFER3_EXT = 0x8828;
export const DRAW_BUFFER4_EXT = 0x8829;
export const DRAW_BUFFER5_EXT = 0x882a;
export const DRAW_BUFFER6_EXT = 0x882b;
export const DRAW_BUFFER7_EXT = 0x882c;
export const DRAW_BUFFER8_EXT = 0x882d;
export const DRAW_BUFFER9_EXT = 0x882e;
export const DRAW_BUFFER10_EXT = 0x882f;
export const DRAW_BUFFER11_EXT = 0x8830;
export const DRAW_BUFFER12_EXT = 0x8831;
export const DRAW_BUFFER13_EXT = 0x8832;
export const DRAW_BUFFER14_EXT = 0x8833;
export const DRAW_BUFFER15_EXT = 0x8834;
export const COLOR_ATTACHMENT0_EXT = 0x8ce0;
export const COLOR_ATTACHMENT1_EXT = 0x8ce1;
export const COLOR_ATTACHMENT2_EXT = 0x8ce2;
export const COLOR_ATTACHMENT3_EXT = 0x8ce3;
export const COLOR_ATTACHMENT4_EXT = 0x8ce4;
export const COLOR_ATTACHMENT5_EXT = 0x8ce5;
export const COLOR_ATTACHMENT6_EXT = 0x8ce6;
export const COLOR_ATTACHMENT7_EXT = 0x8ce7;
export const COLOR_ATTACHMENT8_EXT = 0x8ce8;
export const COLOR_ATTACHMENT9_EXT = 0x8ce9;
export const COLOR_ATTACHMENT10_EXT = 0x8cea;
export const COLOR_ATTACHMENT11_EXT = 0x8ceb;
export const COLOR_ATTACHMENT12_EXT = 0x8cec;
export const COLOR_ATTACHMENT13_EXT = 0x8ced;
export const COLOR_ATTACHMENT14_EXT = 0x8cee;
export const COLOR_ATTACHMENT15_EXT = 0x8cef;

/// Commands

export const def_glDrawBuffersEXT = {
  parameters: ["i32", "buffer"],
  result: "void",
} as const;

let fn_glDrawBuffersEXT!: Deno.UnsafeFnPointer<typeof def_glDrawBuffersEXT>;

export function DrawBuffersEXT(
  n: GLsizei,
  bufs: Buffer,
): void {
  fn_glDrawBuffersEXT.call(
    n,
    bufferToFFI(bufs),
  );
}

/** Loads all OpenGL API function pointers. */
export function load(proc: (name: string) => Deno.PointerValue): void {
  fn_glDrawBuffersEXT = new Deno.UnsafeFnPointer(
    proc("glDrawBuffersEXT"),
    def_glDrawBuffersEXT,
  );
}
