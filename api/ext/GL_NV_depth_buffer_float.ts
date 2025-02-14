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
export const DEPTH_COMPONENT32F_NV = 0x8dab;
export const DEPTH32F_STENCIL8_NV = 0x8dac;
export const FLOAT_32_UNSIGNED_INT_24_8_REV_NV = 0x8dad;
export const DEPTH_BUFFER_FLOAT_MODE_NV = 0x8daf;

/// Commands

export const def_glDepthRangedNV = {
  parameters: ["f64", "f64"],
  result: "void",
} as const;

let fn_glDepthRangedNV!: Deno.UnsafeFnPointer<typeof def_glDepthRangedNV>;

export function DepthRangedNV(
  zNear: GLdouble,
  zFar: GLdouble,
): void {
  fn_glDepthRangedNV.call(
    zNear,
    zFar,
  );
}

export const def_glClearDepthdNV = {
  parameters: ["f64"],
  result: "void",
} as const;

let fn_glClearDepthdNV!: Deno.UnsafeFnPointer<typeof def_glClearDepthdNV>;

export function ClearDepthdNV(
  depth: GLdouble,
): void {
  fn_glClearDepthdNV.call(
    depth,
  );
}

export const def_glDepthBoundsdNV = {
  parameters: ["f64", "f64"],
  result: "void",
} as const;

let fn_glDepthBoundsdNV!: Deno.UnsafeFnPointer<typeof def_glDepthBoundsdNV>;

export function DepthBoundsdNV(
  zmin: GLdouble,
  zmax: GLdouble,
): void {
  fn_glDepthBoundsdNV.call(
    zmin,
    zmax,
  );
}

/** Loads all OpenGL API function pointers. */
export function load(proc: (name: string) => Deno.PointerValue): void {
  fn_glDepthRangedNV = new Deno.UnsafeFnPointer(
    proc("glDepthRangedNV"),
    def_glDepthRangedNV,
  );
  fn_glClearDepthdNV = new Deno.UnsafeFnPointer(
    proc("glClearDepthdNV"),
    def_glClearDepthdNV,
  );
  fn_glDepthBoundsdNV = new Deno.UnsafeFnPointer(
    proc("glDepthBoundsdNV"),
    def_glDepthBoundsdNV,
  );
}
