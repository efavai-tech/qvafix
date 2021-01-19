/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getTaller = /* GraphQL */ `
  query GetTaller($id: ID!) {
    getTaller(id: $id) {
      id
      name
      direccion
      createdAt
      updatedAt
    }
  }
`;
export const listTallers = /* GraphQL */ `
  query ListTallers(
    $filter: ModelTallerFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTallers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        direccion
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getCliente = /* GraphQL */ `
  query GetCliente($id: ID!) {
    getCliente(id: $id) {
      id
      name
      numeroTelefono
      correo
      createdAt
      updatedAt
    }
  }
`;
export const listClientes = /* GraphQL */ `
  query ListClientes(
    $filter: ModelClienteFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listClientes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        numeroTelefono
        correo
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getTecnico = /* GraphQL */ `
  query GetTecnico($id: ID!) {
    getTecnico(id: $id) {
      id
      name
      cargo
      taller
      createdAt
      updatedAt
    }
  }
`;
export const listTecnicos = /* GraphQL */ `
  query ListTecnicos(
    $filter: ModelTecnicoFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTecnicos(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        cargo
        taller
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getPiezas = /* GraphQL */ `
  query GetPiezas($id: ID!) {
    getPiezas(id: $id) {
      id
      nombre
      precio
      cantidad
      createdAt
      updatedAt
    }
  }
`;
export const listPiezass = /* GraphQL */ `
  query ListPiezass(
    $filter: ModelPiezasFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPiezass(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        nombre
        precio
        cantidad
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getEquipo = /* GraphQL */ `
  query GetEquipo($id: ID!) {
    getEquipo(id: $id) {
      id
      nombre
      descripcion
      cliente
      createdAt
      updatedAt
    }
  }
`;
export const listEquipos = /* GraphQL */ `
  query ListEquipos(
    $filter: ModelEquipoFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listEquipos(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        nombre
        descripcion
        cliente
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getOrdenServicio = /* GraphQL */ `
  query GetOrdenServicio($id: ID!) {
    getOrdenServicio(id: $id) {
      id
      equipo
      estadoEquipo
      tecnico
      fechaDeEntrada
      fechaDeFinalizado
      piezas
      createdAt
      updatedAt
    }
  }
`;
export const listOrdenServicios = /* GraphQL */ `
  query ListOrdenServicios(
    $filter: ModelOrdenServicioFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listOrdenServicios(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        equipo
        estadoEquipo
        tecnico
        fechaDeEntrada
        fechaDeFinalizado
        piezas
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getOfertasTrabajo = /* GraphQL */ `
  query GetOfertasTrabajo($id: ID!) {
    getOfertasTrabajo(id: $id) {
      id
      taller
      titulo
      contenido
      createdAt
      updatedAt
    }
  }
`;
export const listOfertasTrabajos = /* GraphQL */ `
  query ListOfertasTrabajos(
    $filter: ModelOfertasTrabajoFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listOfertasTrabajos(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        taller
        titulo
        contenido
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getBlog = /* GraphQL */ `
  query GetBlog($id: ID!) {
    getBlog(id: $id) {
      id
      name
      posts {
        items {
          id
          title
          blogID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listBlogs = /* GraphQL */ `
  query ListBlogs(
    $filter: ModelBlogFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBlogs(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        posts {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getPost = /* GraphQL */ `
  query GetPost($id: ID!) {
    getPost(id: $id) {
      id
      title
      blogID
      blog {
        id
        name
        posts {
          nextToken
        }
        createdAt
        updatedAt
      }
      comments {
        items {
          id
          postID
          content
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listPosts = /* GraphQL */ `
  query ListPosts(
    $filter: ModelPostFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPosts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        blogID
        blog {
          id
          name
          createdAt
          updatedAt
        }
        comments {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getComment = /* GraphQL */ `
  query GetComment($id: ID!) {
    getComment(id: $id) {
      id
      postID
      post {
        id
        title
        blogID
        blog {
          id
          name
          createdAt
          updatedAt
        }
        comments {
          nextToken
        }
        createdAt
        updatedAt
      }
      content
      createdAt
      updatedAt
    }
  }
`;
export const listComments = /* GraphQL */ `
  query ListComments(
    $filter: ModelCommentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listComments(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        postID
        post {
          id
          title
          blogID
          createdAt
          updatedAt
        }
        content
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;