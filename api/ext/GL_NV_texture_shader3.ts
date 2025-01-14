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
export const OFFSET_PROJECTIVE_TEXTURE_2D_NV = 0x8850;
export const OFFSET_PROJECTIVE_TEXTURE_2D_SCALE_NV = 0x8851;
export const OFFSET_PROJECTIVE_TEXTURE_RECTANGLE_NV = 0x8852;
export const OFFSET_PROJECTIVE_TEXTURE_RECTANGLE_SCALE_NV = 0x8853;
export const OFFSET_HILO_TEXTURE_2D_NV = 0x8854;
export const OFFSET_HILO_TEXTURE_RECTANGLE_NV = 0x8855;
export const OFFSET_HILO_PROJECTIVE_TEXTURE_2D_NV = 0x8856;
export const OFFSET_HILO_PROJECTIVE_TEXTURE_RECTANGLE_NV = 0x8857;
export const DEPENDENT_HILO_TEXTURE_2D_NV = 0x8858;
export const DEPENDENT_RGB_TEXTURE_3D_NV = 0x8859;
export const DEPENDENT_RGB_TEXTURE_CUBE_MAP_NV = 0x885a;
export const DOT_PRODUCT_PASS_THROUGH_NV = 0x885b;
export const DOT_PRODUCT_TEXTURE_1D_NV = 0x885c;
export const DOT_PRODUCT_AFFINE_DEPTH_REPLACE_NV = 0x885d;
export const HILO8_NV = 0x885e;
export const SIGNED_HILO8_NV = 0x885f;
export const FORCE_BLUE_TO_ONE_NV = 0x8860;
