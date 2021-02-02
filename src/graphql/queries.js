/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getTaller = /* GraphQL */ `
  query GetTaller($id: ID!) {
    getTaller(id: $id) {
      id
      name
      direccion
      logo
      tecnico {
        items {
          id
          name
          cargo
          tallerID
          createdAt
          updatedAt
        }
        nextToken
      }
      clientes {
        id
        name
        numeroTelefono
        correo
        ordenServicio {
          nextToken
        }
        equipo {
          id
          nombre
          descripcion
          clienteID
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      ofertasTrabajo {
        items {
          id
          tallerID
          titulo
          contenido
          fecha
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
        logo
        tecnico {
          nextToken
        }
        clientes {
          id
          name
          numeroTelefono
          correo
          createdAt
          updatedAt
        }
        ofertasTrabajo {
          nextToken
        }
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
export const getTecnico = /* GraphQL */ `
  query GetTecnico($id: ID!) {
    getTecnico(id: $id) {
      id
      name
      cargo
      tallerID
      taller {
        id
        name
        direccion
        logo
        tecnico {
          nextToken
        }
        clientes {
          id
          name
          numeroTelefono
          correo
          createdAt
          updatedAt
        }
        ofertasTrabajo {
          nextToken
        }
        createdAt
        updatedAt
      }
      ordenServicio {
        items {
          id
          estado
          tecnicoID
          tallerID
          clienteID
          fechaDeFinalizado
          equipoID
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
        tallerID
        taller {
          id
          name
          direccion
          logo
          createdAt
          updatedAt
        }
        ordenServicio {
          nextToken
        }
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
      clienteID
      cliente {
        id
        name
        numeroTelefono
        correo
        ordenServicio {
          nextToken
        }
        equipo {
          id
          nombre
          descripcion
          clienteID
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
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
        clienteID
        cliente {
          id
          name
          numeroTelefono
          correo
          createdAt
          updatedAt
        }
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
      ordenServicio {
        items {
          id
          estado
          tecnicoID
          tecnico{
            name
            taller{
              name
            }
          }
          fechaDeFinalizado
          equipo{
            nombre
          }
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
export const getOrdenServicio = /* GraphQL */ `
  query GetOrdenServicio($id: ID!) {
    getOrdenServicio(id: $id) {
      id
      estado
      tecnicoID
      tecnico {
        id
        name
        cargo
        tallerID
        taller {
          id
          name
          direccion
          logo
          createdAt
          updatedAt
        }
        ordenServicio {
          nextToken
        }
        createdAt
        updatedAt
      }
      tallerID
      clienteID
      cliente {
        id
        name
        numeroTelefono
        correo
        ordenServicio {
          nextToken
        }
        equipo {
          id
          nombre
          descripcion
          clienteID
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      fechaDeFinalizado
      equipoID
      equipo {
        id
        nombre
        descripcion
        clienteID
        cliente {
          id
          name
          numeroTelefono
          correo
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      piezas {
        id
        nombre
        precio
        cantidad
        createdAt
        updatedAt
      }
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
        estado
        tecnicoID
        tecnico {
          id
          name
          cargo
          tallerID
          createdAt
          updatedAt
        }
        tallerID
        clienteID
        cliente {
          id
          name
          numeroTelefono
          correo
          createdAt
          updatedAt
        }
        fechaDeFinalizado
        equipoID
        equipo {
          id
          nombre
          descripcion
          clienteID
          createdAt
          updatedAt
        }
        piezas {
          id
          nombre
          precio
          cantidad
          createdAt
          updatedAt
        }
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
      tallerID
      taller {
        id
        name
        direccion
        logo
        tecnico {
          nextToken
        }
        clientes {
          id
          name
          numeroTelefono
          correo
          createdAt
          updatedAt
        }
        ofertasTrabajo {
          nextToken
        }
        createdAt
        updatedAt
      }
      titulo
      contenido
      fecha
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
        tallerID
        taller {
          id
          name
          direccion
          logo
          createdAt
          updatedAt
        }
        titulo
        contenido
        fecha
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
          content
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
      content
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
        content
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
        content
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
          content
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