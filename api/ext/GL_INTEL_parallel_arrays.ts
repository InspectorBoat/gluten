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
export const PARALLEL_ARRAYS_INTEL = 0x83f4;
export const VERTEX_ARRAY_PARALLEL_POINTERS_INTEL = 0x83f5;
export const NORMAL_ARRAY_PARALLEL_POINTERS_INTEL = 0x83f6;
export const COLOR_ARRAY_PARALLEL_POINTERS_INTEL = 0x83f7;
export const TEXTURE_COORD_ARRAY_PARALLEL_POINTERS_INTEL = 0x83f8;

/// Commands

export const def_glVertexPointervINTEL = {
  parameters: ["i32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glVertexPointervINTEL!: Deno.UnsafeFnPointer<
  typeof def_glVertexPointervINTEL
>;

export function VertexPointervINTEL(
  size: GLint,
  type: GLenum,
  pointer: Buffer,
): void {
  fn_glVertexPointervINTEL.call(
    size,
    type,
    bufferToFFI(pointer),
  );
}

export const def_glNormalPointervINTEL = {
  parameters: ["u32", "buffer"],
  result: "void",
} as const;

let fn_glNormalPointervINTEL!: Deno.UnsafeFnPointer<
  typeof def_glNormalPointervINTEL
>;

export function NormalPointervINTEL(
  type: GLenum,
  pointer: Buffer,
): void {
  fn_glNormalPointervINTEL.call(
    type,
    bufferToFFI(pointer),
  );
}

export const def_glColorPointervINTEL = {
  parameters: ["i32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glColorPointervINTEL!: Deno.UnsafeFnPointer<
  typeof def_glColorPointervINTEL
>;

export function ColorPointervINTEL(
  size: GLint,
  type: GLenum,
  pointer: Buffer,
): void {
  fn_glColorPointervINTEL.call(
    size,
    type,
    bufferToFFI(pointer),
  );
}

export const def_glTexCoordPointervINTEL = {
  parameters: ["i32", "u32", "buffer"],
  result: "void",
} as const;

let fn_glTexCoordPointervINTEL!: Deno.UnsafeFnPointer<
  typeof def_glTexCoordPointervINTEL
>;

export function TexCoordPointervINTEL(
  size: GLint,
  type: GLenum,
  pointer: Buffer,
): void {
  fn_glTexCoordPointervINTEL.call(
    size,
    type,
    bufferToFFI(pointer),
  );
}

/** Loads all OpenGL API function pointers. */
export function load(proc: (name: string) => Deno.PointerValue): void {
  fn_glVertexPointervINTEL = new Deno.UnsafeFnPointer(
    proc("glVertexPointervINTEL"),
    def_glVertexPointervINTEL,
  );
  fn_glNormalPointervINTEL = new Deno.UnsafeFnPointer(
    proc("glNormalPointervINTEL"),
    def_glNormalPointervINTEL,
  );
  fn_glColorPointervINTEL = new Deno.UnsafeFnPointer(
    proc("glColorPointervINTEL"),
    def_glColorPointervINTEL,
  );
  fn_glTexCoordPointervINTEL = new Deno.UnsafeFnPointer(
    proc("glTexCoordPointervINTEL"),
    def_glTexCoordPointervINTEL,
  );
}
