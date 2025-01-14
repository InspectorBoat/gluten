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
export const QUERY_RESOURCE_TYPE_VIDMEM_ALLOC_NV = 0x9540;
export const QUERY_RESOURCE_MEMTYPE_VIDMEM_NV = 0x9542;
export const QUERY_RESOURCE_SYS_RESERVED_NV = 0x9544;
export const QUERY_RESOURCE_TEXTURE_NV = 0x9545;
export const QUERY_RESOURCE_RENDERBUFFER_NV = 0x9546;
export const QUERY_RESOURCE_BUFFEROBJECT_NV = 0x9547;

/// Commands

export const def_glQueryResourceNV = {
  parameters: ["u32", "i32", "u32", "buffer"],
  result: "i32",
} as const;

let fn_glQueryResourceNV!: Deno.UnsafeFnPointer<typeof def_glQueryResourceNV>;

export function QueryResourceNV(
  queryType: GLenum,
  tagId: GLint,
  count: GLuint,
  buffer: Buffer,
): GLint {
  return fn_glQueryResourceNV.call(
    queryType,
    tagId,
    count,
    bufferToFFI(buffer),
  );
}

/** Loads all OpenGL API function pointers. */
export function load(proc: (name: string) => Deno.PointerValue): void {
  fn_glQueryResourceNV = new Deno.UnsafeFnPointer(
    proc("glQueryResourceNV"),
    def_glQueryResourceNV,
  );
}
