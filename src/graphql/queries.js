/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getOrdenServicio = /* GraphQL */ `
  query GetOrdenServicio($id: ID!) {
    getOrdenServicio(id: $id) {
      id
      numero
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
        createdAt
        updatedAt
        owner
      }
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
          nextToken
        }
        createdAt
        updatedAt
        owner
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
          owner
        }
        createdAt
        updatedAt
        owner
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
      owner
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
        tecnico {
          id
          name
          cargo
          tallerID
          createdAt
          updatedAt
          owner
        }
        clienteID
        cliente {
          id
          name
          numeroTelefono
          correo
          createdAt
          updatedAt
          owner
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
          owner
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
        owner
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
      tecnicos {
        items {
          id
          name
          cargo
          tallerID
          createdAt
          updatedAt
          owner
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
          nextToken
        }
        createdAt
        updatedAt
        owner
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
          owner
        }
        nextToken
      }
      telefonos
      administradorID
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
        correo
        mision
        vision
        descripcionLaboral
        otro
        logo
        tecnicos {
          nextToken
        }
        clientes {
          id
          name
          numeroTelefono
          correo
          createdAt
          updatedAt
          owner
        }
        ofertasTrabajo {
          nextToken
        }
        telefonos
        administradorID
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
        correo
        mision
        vision
        descripcionLaboral
        otro
        logo
        tecnicos {
          nextToken
        }
        clientes {
          id
          name
          numeroTelefono
          correo
          createdAt
          updatedAt
          owner
        }
        ofertasTrabajo {
          nextToken
        }
        telefonos
        administradorID
        createdAt
        updatedAt
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
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      owner
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
        createdAt
        updatedAt
        owner
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
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      createdAt
      updatedAt
      owner
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
          owner
        }
        createdAt
        updatedAt
        owner
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
          numero
          estado
          tecnicoID
          clienteID
          fechaDeFinalizado
          equipoID
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      equipo {
        items {
          id
          nombre
          descripcion
          clienteID
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      owner
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
        ordenServicio {
          nextToken
        }
        equipo {
          nextToken
        }
        createdAt
        updatedAt
        owner
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
        tecnicos {
          nextToken
        }
        clientes {
          id
          name
          numeroTelefono
          correo
          createdAt
          updatedAt
          owner
        }
        ofertasTrabajo {
          nextToken
        }
        telefonos
        administradorID
        createdAt
        updatedAt
      }
      titulo
      contenido
      fecha
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
      createdAt
      updatedAt
      owner
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
        titulo
        contenido
        fecha
        aspirantes {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      nextToken
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
      ofertaTrabajo {
        id
        tallerID
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
        titulo
        contenido
        fecha
        aspirantes {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      createdAt
      updatedAt
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
        ofertaTrabajo {
          id
          tallerID
          titulo
          contenido
          fecha
          createdAt
          updatedAt
          owner
        }
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
          username
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      owner
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
        owner
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
        owner
      }
      answer {
        items {
          id
          content
          username
          postID
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      username
      createdAt
      updatedAt
      owner
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
          owner
        }
        answer {
          nextToken
        }
        username
        createdAt
        updatedAt
        owner
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
          owner
        }
        answer {
          nextToken
        }
        username
        createdAt
        updatedAt
        owner
      }
      comments {
        items {
          id
          answerID
          content
          username
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      owner
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
        post {
          id
          title
          content
          blogID
          username
          createdAt
          updatedAt
          owner
        }
        comments {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const getComment = /* GraphQL */ `
  query GetComment($id: ID!) {
    getComment(id: $id) {
      id
      answerID
      answer {
        id
        content
        username
        postID
        post {
          id
          title
          content
          blogID
          username
          createdAt
          updatedAt
          owner
        }
        comments {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      content
      username
      createdAt
      updatedAt
      owner
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
        answer {
          id
          content
          username
          postID
          createdAt
          updatedAt
          owner
        }
        content
        username
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
