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
export const SRGB_EXT = 0x8c40;
export const SRGB8_EXT = 0x8c41;
export const SRGB_ALPHA_EXT = 0x8c42;
export const SRGB8_ALPHA8_EXT = 0x8c43;
export const SLUMINANCE_ALPHA_EXT = 0x8c44;
export const SLUMINANCE8_ALPHA8_EXT = 0x8c45;
export const SLUMINANCE_EXT = 0x8c46;
export const SLUMINANCE8_EXT = 0x8c47;
export const COMPRESSED_SRGB_EXT = 0x8c48;
export const COMPRESSED_SRGB_ALPHA_EXT = 0x8c49;
export const COMPRESSED_SLUMINANCE_EXT = 0x8c4a;
export const COMPRESSED_SLUMINANCE_ALPHA_EXT = 0x8c4b;
export const COMPRESSED_SRGB_S3TC_DXT1_EXT = 0x8c4c;
export const COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT = 0x8c4d;
export const COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT = 0x8c4e;
export const COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT = 0x8c4f;
