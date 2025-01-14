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
export const LINES_ADJACENCY_EXT = 0xa;
export const LINE_STRIP_ADJACENCY_EXT = 0xb;
export const TRIANGLES_ADJACENCY_EXT = 0xc;
export const TRIANGLE_STRIP_ADJACENCY_EXT = 0xd;
export const GEOMETRY_PROGRAM_NV = 0x8c26;
export const MAX_PROGRAM_OUTPUT_VERTICES_NV = 0x8c27;
export const MAX_PROGRAM_TOTAL_OUTPUT_COMPONENTS_NV = 0x8c28;
export const GEOMETRY_VERTICES_OUT_EXT = 0x8dda;
export const GEOMETRY_INPUT_TYPE_EXT = 0x8ddb;
export const GEOMETRY_OUTPUT_TYPE_EXT = 0x8ddc;
export const MAX_GEOMETRY_TEXTURE_IMAGE_UNITS_EXT = 0x8c29;
export const FRAMEBUFFER_ATTACHMENT_LAYERED_EXT = 0x8da7;
export const FRAMEBUFFER_INCOMPLETE_LAYER_TARGETS_EXT = 0x8da8;
export const FRAMEBUFFER_INCOMPLETE_LAYER_COUNT_EXT = 0x8da9;
export const FRAMEBUFFER_ATTACHMENT_TEXTURE_LAYER_EXT = 0x8cd4;
export const PROGRAM_POINT_SIZE_EXT = 0x8642;

/// Commands

export const def_glProgramVertexLimitNV = {
  parameters: ["u32", "i32"],
  result: "void",
} as const;

let fn_glProgramVertexLimitNV!: Deno.UnsafeFnPointer<
  typeof def_glProgramVertexLimitNV
>;

export function ProgramVertexLimitNV(
  target: GLenum,
  limit: GLint,
): void {
  fn_glProgramVertexLimitNV.call(
    target,
    limit,
  );
}

export const def_glFramebufferTextureEXT = {
  parameters: ["u32", "u32", "u32", "i32"],
  result: "void",
} as const;

let fn_glFramebufferTextureEXT!: Deno.UnsafeFnPointer<
  typeof def_glFramebufferTextureEXT
>;

export function FramebufferTextureEXT(
  target: GLenum,
  attachment: GLenum,
  texture: GLuint,
  level: GLint,
): void {
  fn_glFramebufferTextureEXT.call(
    target,
    attachment,
    texture,
    level,
  );
}

export const def_glFramebufferTextureLayerEXT = {
  parameters: ["u32", "u32", "u32", "i32", "i32"],
  result: "void",
} as const;

let fn_glFramebufferTextureLayerEXT!: Deno.UnsafeFnPointer<
  typeof def_glFramebufferTextureLayerEXT
>;

export function FramebufferTextureLayerEXT(
  target: GLenum,
  attachment: GLenum,
  texture: GLuint,
  level: GLint,
  layer: GLint,
): void {
  fn_glFramebufferTextureLayerEXT.call(
    target,
    attachment,
    texture,
    level,
    layer,
  );
}

export const def_glFramebufferTextureFaceEXT = {
  parameters: ["u32", "u32", "u32", "i32", "u32"],
  result: "void",
} as const;

let fn_glFramebufferTextureFaceEXT!: Deno.UnsafeFnPointer<
  typeof def_glFramebufferTextureFaceEXT
>;

export function FramebufferTextureFaceEXT(
  target: GLenum,
  attachment: GLenum,
  texture: GLuint,
  level: GLint,
  face: GLenum,
): void {
  fn_glFramebufferTextureFaceEXT.call(
    target,
    attachment,
    texture,
    level,
    face,
  );
}

/** Loads all OpenGL API function pointers. */
export function load(proc: (name: string) => Deno.PointerValue): void {
  fn_glProgramVertexLimitNV = new Deno.UnsafeFnPointer(
    proc("glProgramVertexLimitNV"),
    def_glProgramVertexLimitNV,
  );
  fn_glFramebufferTextureEXT = new Deno.UnsafeFnPointer(
    proc("glFramebufferTextureEXT"),
    def_glFramebufferTextureEXT,
  );
  fn_glFramebufferTextureLayerEXT = new Deno.UnsafeFnPointer(
    proc("glFramebufferTextureLayerEXT"),
    def_glFramebufferTextureLayerEXT,
  );
  fn_glFramebufferTextureFaceEXT = new Deno.UnsafeFnPointer(
    proc("glFramebufferTextureFaceEXT"),
    def_glFramebufferTextureFaceEXT,
  );
}
