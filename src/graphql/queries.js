/* eslint-disable */
// this is an auto generated file. This will be overwritten

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
        correo
        mision
        vision
        descripcionLaboral
        otro
        logo
        clientes {
          id
          name
          numeroTelefono
          correo
          createdAt
          updatedAt
        }
        telefonos
        administradorID
        createdAt
        updatedAt
        tecnicos {
          nextToken
        }
        ofertasTrabajo {
          nextToken
        }
      }
      nextToken
    }
  }
`;
export const getTaller = /* GraphQL */ `
  query GetTaller($id: ID!) {
    getTaller(id: $id) {
      id
      name
      direccion
      correo
      mision
      vision
      descripcionLaboral
      otro
      logo
      clientes {
        id
        name
        numeroTelefono
        correo
        createdAt
        updatedAt
        equipo {
          nextToken
        }
        ordenServicio {
          nextToken
        }
      }
      telefonos
      administradorID
      createdAt
      updatedAt
      tecnicos {
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
        createdAt
        updatedAt
        taller {
          id
          name
          direccion
          correo
          mision
          vision
          descripcionLaboral
          otro
          logo
          telefonos
          administradorID
          createdAt
          updatedAt
        }
        ordenServicio {
          nextToken
        }
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
      createdAt
      updatedAt
      taller {
        id
        name
        direccion
        correo
        mision
        vision
        descripcionLaboral
        otro
        logo
        clientes {
          id
          name
          numeroTelefono
          correo
          createdAt
          updatedAt
        }
        telefonos
        administradorID
        createdAt
        updatedAt
        tecnicos {
          nextToken
        }
        ofertasTrabajo {
          nextToken
        }
      }
      ordenServicio {
        items {
          id
          numero
          estado
          tecnicoID
          clienteID
          fechaDeFinalizado
          equipoID
          createdAt
          updatedAt
        }
        nextToken
      }
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
        createdAt
        updatedAt
        cliente {
          id
          name
          numeroTelefono
          correo
          createdAt
          updatedAt
        }
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
      createdAt
      updatedAt
      cliente {
        id
        name
        numeroTelefono
        correo
        createdAt
        updatedAt
        equipo {
          nextToken
        }
        ordenServicio {
          nextToken
        }
      }
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
        equipo {
          nextToken
        }
        ordenServicio {
          nextToken
        }
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
      equipo {
        items {
          id
          nombre
          descripcion
          clienteID
          createdAt
          updatedAt
        }
        nextToken
      }
      ordenServicio {
        items {
          id
          numero
          estado
          tecnicoID
          clienteID
          fechaDeFinalizado
          equipoID
          createdAt
          updatedAt
        }
        nextToken
      }
    }
  }
`;
export const getOrdenServicio = /* GraphQL */ `
  query GetOrdenServicio($id: ID!) {
    getOrdenServicio(id: $id) {
      id
      numero
      estado
      tecnicoID
      clienteID
      fechaDeFinalizado
      equipoID
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
      tecnico {
        id
        name
        cargo
        tallerID
        createdAt
        updatedAt
        taller {
          id
          name
          direccion
          correo
          mision
          vision
          descripcionLaboral
          otro
          logo
          telefonos
          administradorID
          createdAt
          updatedAt
        }
        ordenServicio {
          nextToken
        }
      }
      equipo {
        id
        nombre
        descripcion
        clienteID
        createdAt
        updatedAt
        cliente {
          id
          name
          numeroTelefono
          correo
          createdAt
          updatedAt
        }
      }
      cliente {
        id
        name
        numeroTelefono
        correo
        createdAt
        updatedAt
        equipo {
          nextToken
        }
        ordenServicio {
          nextToken
        }
      }
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
        numero
        estado
        tecnicoID
        clienteID
        fechaDeFinalizado
        equipoID
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
        tecnico {
          id
          name
          cargo
          tallerID
          createdAt
          updatedAt
        }
        equipo {
          id
          nombre
          descripcion
          clienteID
          createdAt
          updatedAt
        }
        cliente {
          id
          name
          numeroTelefono
          correo
          createdAt
          updatedAt
        }
      }
      nextToken
    }
  }
`;
export const listOfertaTrabajos = /* GraphQL */ `
  query ListOfertaTrabajos(
    $filter: ModelOfertaTrabajoFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listOfertaTrabajos(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        tallerID
        titulo
        contenido
        fecha
        createdAt
        updatedAt
        taller {
          id
          name
          direccion
          correo
          mision
          vision
          descripcionLaboral
          otro
          logo
          telefonos
          administradorID
          createdAt
          updatedAt
        }
        aspirantes {
          nextToken
        }
      }
      nextToken
    }
  }
`;
export const getOfertaTrabajo = /* GraphQL */ `
  query GetOfertaTrabajo($id: ID!) {
    getOfertaTrabajo(id: $id) {
      id
      tallerID
      titulo
      contenido
      fecha
      createdAt
      updatedAt
      taller {
        id
        name
        direccion
        correo
        mision
        vision
        descripcionLaboral
        otro
        logo
        clientes {
          id
          name
          numeroTelefono
          correo
          createdAt
          updatedAt
        }
        telefonos
        administradorID
        createdAt
        updatedAt
        tecnicos {
          nextToken
        }
        ofertasTrabajo {
          nextToken
        }
      }
      aspirantes {
        items {
          id
          name
          numeroTelefono
          correo
          ofertaTrabajoID
          createdAt
          updatedAt
        }
        nextToken
      }
    }
  }
`;
export const getAspirante = /* GraphQL */ `
  query GetAspirante($id: ID!) {
    getAspirante(id: $id) {
      id
      name
      numeroTelefono
      correo
      ofertaTrabajoID
      createdAt
      updatedAt
      ofertaTrabajo {
        id
        tallerID
        titulo
        contenido
        fecha
        createdAt
        updatedAt
        taller {
          id
          name
          direccion
          correo
          mision
          vision
          descripcionLaboral
          otro
          logo
          telefonos
          administradorID
          createdAt
          updatedAt
        }
        aspirantes {
          nextToken
        }
      }
    }
  }
`;
export const listAspirantes = /* GraphQL */ `
  query ListAspirantes(
    $filter: ModelAspiranteFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAspirantes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        numeroTelefono
        correo
        ofertaTrabajoID
        createdAt
        updatedAt
        ofertaTrabajo {
          id
          tallerID
          titulo
          contenido
          fecha
          createdAt
          updatedAt
        }
      }
      nextToken
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
        createdAt
        updatedAt
        posts {
          nextToken
        }
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
      createdAt
      updatedAt
      posts {
        items {
          id
          title
          content
          blogID
          username
          createdAt
          updatedAt
        }
        nextToken
      }
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
        username
        createdAt
        updatedAt
        blog {
          id
          name
          createdAt
          updatedAt
        }
        answer {
          nextToken
        }
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
      username
      createdAt
      updatedAt
      blog {
        id
        name
        createdAt
        updatedAt
        posts {
          nextToken
        }
      }
      answer {
        items {
          id
          content
          username
          createdAt
          updatedAt
          comments{
            items{
              id
              content
              username
            }
          }
        }
        nextToken
      }
    }
  }
`;
export const listAnswers = /* GraphQL */ `
  query ListAnswers(
    $filter: ModelAnswerFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAnswers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        content
        username
        postID
        createdAt
        updatedAt
        post {
          id
          title
          content
          blogID
          username
          createdAt
          updatedAt
        }
        comments {
          nextToken
        }
      }
      nextToken
    }
  }
`;
export const getAnswer = /* GraphQL */ `
  query GetAnswer($id: ID!) {
    getAnswer(id: $id) {
      id
      content
      username
      postID
      createdAt
      updatedAt
      post {
        id
        title
        content
        blogID
        username
        createdAt
        updatedAt
        blog {
          id
          name
          createdAt
          updatedAt
        }
        answer {
          nextToken
        }
      }
      comments {
        items {
          id
          answerID
          content
          username
          createdAt
          updatedAt
        }
        nextToken
      }
    }
  }
`;
export const getComment = /* GraphQL */ `
  query GetComment($id: ID!) {
    getComment(id: $id) {
      id
      answerID
      content
      username
      createdAt
      updatedAt
      answer {
        id
        content
        username
        postID
        createdAt
        updatedAt
        post {
          id
          title
          content
          blogID
          username
          createdAt
          updatedAt
        }
        comments {
          nextToken
        }
      }
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
        answerID
        content
        username
        createdAt
        updatedAt
        answer {
          id
          content
          username
          postID
          createdAt
          updatedAt
        }
      }
      nextToken
    }
  }
`;