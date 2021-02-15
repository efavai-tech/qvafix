/* eslint-disable */
// this is an auto generated file. This will be overwritten

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
      telefonos {
        items {
          id
          numero
          descripcion
          tallerID
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
        }
        ofertasTrabajo {
          nextToken
        }
        telefonos {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getTelefono = /* GraphQL */ `
  query GetTelefono($id: ID!) {
    getTelefono(id: $id) {
      id
      numero
      descripcion
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
        }
        ofertasTrabajo {
          nextToken
        }
        telefonos {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const listTelefonos = /* GraphQL */ `
  query ListTelefonos(
    $filter: ModelTelefonoFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTelefonos(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        numero
        descripcion
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
        }
        ofertasTrabajo {
          nextToken
        }
        telefonos {
          nextToken
        }
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
          correo
          mision
          vision
          descripcionLaboral
          otro
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
          nextToken
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
          numero
          estado
          tecnico{
            name
            taller{
              name
            }
            }
          fechaDeFinalizado
          equipo
          {
            nombre
            }
          createdAt
          updatedAt
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
        ordenServicio {
          nextToken
        }
        equipo {
          nextToken
        }
        createdAt
        updatedAt
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
        }
        ofertasTrabajo {
          nextToken
        }
        telefonos {
          nextToken
        }
        createdAt
        updatedAt
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
          createdAt
          updatedAt
        }
        ordenServicio {
          nextToken
        }
        createdAt
        updatedAt
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
        }
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
        }
        ofertasTrabajo {
          nextToken
        }
        telefonos {
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
          correo
          mision
          vision
          descripcionLaboral
          otro
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
          username
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
      answer {
        items {
          id
          content
          username
          comments{
            items {
            id
            content
            username
          }
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      username
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
        answer {
          nextToken
        }
        username
        createdAt
        updatedAt
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
        }
        answer {
          nextToken
        }
        username
        createdAt
        updatedAt
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
      createdAt
      updatedAt
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
        }
        comments {
          nextToken
        }
        createdAt
        updatedAt
      }
      content
      username
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
        answerID
        answer {
          id
          content
          username
          postID
          createdAt
          updatedAt
        }
        content
        username
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;