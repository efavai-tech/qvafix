/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const deleteTaller = /* GraphQL */ `
  mutation DeleteTaller(
    $input: DeleteTallerInput!
    $condition: ModelTallerConditionInput
  ) {
    deleteTaller(input: $input, condition: $condition) {
      id
      name
      direccion
      correo
      mision
      vision
      descripcionLaboral
      otro
      logo
      redesSociales
      catalogo
      clientes {
        id
        identidad
        name
        direccion
        numeroTelefono
        correo
        createdAt
        updatedAt
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
export const deletePiezas = /* GraphQL */ `
  mutation DeletePiezas(
    $input: DeletePiezasInput!
    $condition: ModelPiezasConditionInput
  ) {
    deletePiezas(input: $input, condition: $condition) {
      id
      nombre
      precio
      cantidad
      createdAt
      updatedAt
    }
  }
`;
export const deleteTecnico = /* GraphQL */ `
  mutation DeleteTecnico(
    $input: DeleteTecnicoInput!
    $condition: ModelTecnicoConditionInput
  ) {
    deleteTecnico(input: $input, condition: $condition) {
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
        redesSociales
        catalogo
        clientes {
          id
          identidad
          name
          direccion
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
          clienteID
          tallerID
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
export const deleteEquipo = /* GraphQL */ `
  mutation DeleteEquipo(
    $input: DeleteEquipoInput!
    $condition: ModelEquipoConditionInput
  ) {
    deleteEquipo(input: $input, condition: $condition) {
      id
      tipo
      marca
      modelo
      serie
      createdAt
      updatedAt
    }
  }
`;
export const deleteCliente = /* GraphQL */ `
  mutation DeleteCliente(
    $input: DeleteClienteInput!
    $condition: ModelClienteConditionInput
  ) {
    deleteCliente(input: $input, condition: $condition) {
      id
      identidad
      name
      direccion
      numeroTelefono
      correo
      createdAt
      updatedAt
      ordenServicio {
        items {
          id
          numero
          clienteID
          tallerID
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
export const deleteOrdenServicio = /* GraphQL */ `
  mutation DeleteOrdenServicio(
    $input: DeleteOrdenServicioInput!
    $condition: ModelOrdenServicioConditionInput
  ) {
    deleteOrdenServicio(input: $input, condition: $condition) {
      id
      numero
      estados {
        status
        fecha
        descripcion
      }
      clienteID
      tallerID
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
          redesSociales
          catalogo
          telefonos
          administradorID
          createdAt
          updatedAt
        }
        ordenServicio {
          nextToken
        }
      }
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
        redesSociales
        catalogo
        clientes {
          id
          identidad
          name
          direccion
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
      equipo {
        id
        tipo
        marca
        modelo
        serie
        createdAt
        updatedAt
      }
      cliente {
        id
        identidad
        name
        direccion
        numeroTelefono
        correo
        createdAt
        updatedAt
        ordenServicio {
          nextToken
        }
      }
    }
  }
`;
export const deleteOfertaTrabajo = /* GraphQL */ `
  mutation DeleteOfertaTrabajo(
    $input: DeleteOfertaTrabajoInput!
    $condition: ModelOfertaTrabajoConditionInput
  ) {
    deleteOfertaTrabajo(input: $input, condition: $condition) {
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
        redesSociales
        catalogo
        clientes {
          id
          identidad
          name
          direccion
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
export const deleteAspirante = /* GraphQL */ `
  mutation DeleteAspirante(
    $input: DeleteAspiranteInput!
    $condition: ModelAspiranteConditionInput
  ) {
    deleteAspirante(input: $input, condition: $condition) {
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
          redesSociales
          catalogo
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
export const deleteBlog = /* GraphQL */ `
  mutation DeleteBlog(
    $input: DeleteBlogInput!
    $condition: ModelBlogConditionInput
  ) {
    deleteBlog(input: $input, condition: $condition) {
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
export const deletePost = /* GraphQL */ `
  mutation DeletePost(
    $input: DeletePostInput!
    $condition: ModelPostConditionInput
  ) {
    deletePost(input: $input, condition: $condition) {
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
          postID
          createdAt
          updatedAt
        }
        nextToken
      }
    }
  }
`;
export const deleteAnswer = /* GraphQL */ `
  mutation DeleteAnswer(
    $input: DeleteAnswerInput!
    $condition: ModelAnswerConditionInput
  ) {
    deleteAnswer(input: $input, condition: $condition) {
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
export const deleteComment = /* GraphQL */ `
  mutation DeleteComment(
    $input: DeleteCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    deleteComment(input: $input, condition: $condition) {
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
export const createTaller = /* GraphQL */ `
  mutation CreateTaller(
    $input: CreateTallerInput!
    $condition: ModelTallerConditionInput
  ) {
    createTaller(input: $input, condition: $condition) {
      id
      name
      direccion
      correo
      mision
      vision
      descripcionLaboral
      otro
      logo
      redesSociales
      catalogo
      clientes {
        id
        identidad
        name
        direccion
        numeroTelefono
        correo
        createdAt
        updatedAt
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
export const updateTaller = /* GraphQL */ `
  mutation UpdateTaller(
    $input: UpdateTallerInput!
    $condition: ModelTallerConditionInput
  ) {
    updateTaller(input: $input, condition: $condition) {
      id
      name
      direccion
      correo
      mision
      vision
      descripcionLaboral
      otro
      logo
      redesSociales
      catalogo
      clientes {
        id
        identidad
        name
        direccion
        numeroTelefono
        correo
        createdAt
        updatedAt
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
export const createPiezas = /* GraphQL */ `
  mutation CreatePiezas(
    $input: CreatePiezasInput!
    $condition: ModelPiezasConditionInput
  ) {
    createPiezas(input: $input, condition: $condition) {
      id
      nombre
      precio
      cantidad
      createdAt
      updatedAt
    }
  }
`;
export const updatePiezas = /* GraphQL */ `
  mutation UpdatePiezas(
    $input: UpdatePiezasInput!
    $condition: ModelPiezasConditionInput
  ) {
    updatePiezas(input: $input, condition: $condition) {
      id
      nombre
      precio
      cantidad
      createdAt
      updatedAt
    }
  }
`;
export const createTecnico = /* GraphQL */ `
  mutation CreateTecnico(
    $input: CreateTecnicoInput!
    $condition: ModelTecnicoConditionInput
  ) {
    createTecnico(input: $input, condition: $condition) {
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
        redesSociales
        catalogo
        clientes {
          id
          identidad
          name
          direccion
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
          clienteID
          tallerID
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
export const updateTecnico = /* GraphQL */ `
  mutation UpdateTecnico(
    $input: UpdateTecnicoInput!
    $condition: ModelTecnicoConditionInput
  ) {
    updateTecnico(input: $input, condition: $condition) {
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
        redesSociales
        catalogo
        clientes {
          id
          identidad
          name
          direccion
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
          clienteID
          tallerID
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
export const createEquipo = /* GraphQL */ `
  mutation CreateEquipo(
    $input: CreateEquipoInput!
    $condition: ModelEquipoConditionInput
  ) {
    createEquipo(input: $input, condition: $condition) {
      id
      tipo
      marca
      modelo
      serie
      createdAt
      updatedAt
    }
  }
`;
export const updateEquipo = /* GraphQL */ `
  mutation UpdateEquipo(
    $input: UpdateEquipoInput!
    $condition: ModelEquipoConditionInput
  ) {
    updateEquipo(input: $input, condition: $condition) {
      id
      tipo
      marca
      modelo
      serie
      createdAt
      updatedAt
    }
  }
`;
export const createCliente = /* GraphQL */ `
  mutation CreateCliente(
    $input: CreateClienteInput!
    $condition: ModelClienteConditionInput
  ) {
    createCliente(input: $input, condition: $condition) {
      id
      identidad
      name
      direccion
      numeroTelefono
      correo
      createdAt
      updatedAt
      ordenServicio {
        items {
          id
          numero
          clienteID
          tallerID
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
export const updateCliente = /* GraphQL */ `
  mutation UpdateCliente(
    $input: UpdateClienteInput!
    $condition: ModelClienteConditionInput
  ) {
    updateCliente(input: $input, condition: $condition) {
      id
      identidad
      name
      direccion
      numeroTelefono
      correo
      createdAt
      updatedAt
      ordenServicio {
        items {
          id
          numero
          clienteID
          tallerID
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
export const createOrdenServicio = /* GraphQL */ `
  mutation CreateOrdenServicio(
    $input: CreateOrdenServicioInput!
    $condition: ModelOrdenServicioConditionInput
  ) {
    createOrdenServicio(input: $input, condition: $condition) {
      id
      numero
      estados {
        status
        fecha
        descripcion
      }
      clienteID
      tallerID
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
          redesSociales
          catalogo
          telefonos
          administradorID
          createdAt
          updatedAt
        }
        ordenServicio {
          nextToken
        }
      }
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
        redesSociales
        catalogo
        clientes {
          id
          identidad
          name
          direccion
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
      equipo {
        id
        tipo
        marca
        modelo
        serie
        createdAt
        updatedAt
      }
      cliente {
        id
        identidad
        name
        direccion
        numeroTelefono
        correo
        createdAt
        updatedAt
        ordenServicio {
          nextToken
        }
      }
    }
  }
`;
export const updateOrdenServicio = /* GraphQL */ `
  mutation UpdateOrdenServicio(
    $input: UpdateOrdenServicioInput!
    $condition: ModelOrdenServicioConditionInput
  ) {
    updateOrdenServicio(input: $input, condition: $condition) {
      id
      numero
      estados {
        status
        fecha
        descripcion
      }
      clienteID
      tallerID
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
          redesSociales
          catalogo
          telefonos
          administradorID
          createdAt
          updatedAt
        }
        ordenServicio {
          nextToken
        }
      }
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
        redesSociales
        catalogo
        clientes {
          id
          identidad
          name
          direccion
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
      equipo {
        id
        tipo
        marca
        modelo
        serie
        createdAt
        updatedAt
      }
      cliente {
        id
        identidad
        name
        direccion
        numeroTelefono
        correo
        createdAt
        updatedAt
        ordenServicio {
          nextToken
        }
      }
    }
  }
`;
export const createOfertaTrabajo = /* GraphQL */ `
  mutation CreateOfertaTrabajo(
    $input: CreateOfertaTrabajoInput!
    $condition: ModelOfertaTrabajoConditionInput
  ) {
    createOfertaTrabajo(input: $input, condition: $condition) {
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
        redesSociales
        catalogo
        clientes {
          id
          identidad
          name
          direccion
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
export const updateOfertaTrabajo = /* GraphQL */ `
  mutation UpdateOfertaTrabajo(
    $input: UpdateOfertaTrabajoInput!
    $condition: ModelOfertaTrabajoConditionInput
  ) {
    updateOfertaTrabajo(input: $input, condition: $condition) {
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
        redesSociales
        catalogo
        clientes {
          id
          identidad
          name
          direccion
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
export const createAspirante = /* GraphQL */ `
  mutation CreateAspirante(
    $input: CreateAspiranteInput!
    $condition: ModelAspiranteConditionInput
  ) {
    createAspirante(input: $input, condition: $condition) {
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
          redesSociales
          catalogo
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
export const updateAspirante = /* GraphQL */ `
  mutation UpdateAspirante(
    $input: UpdateAspiranteInput!
    $condition: ModelAspiranteConditionInput
  ) {
    updateAspirante(input: $input, condition: $condition) {
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
          redesSociales
          catalogo
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
export const createBlog = /* GraphQL */ `
  mutation CreateBlog(
    $input: CreateBlogInput!
    $condition: ModelBlogConditionInput
  ) {
    createBlog(input: $input, condition: $condition) {
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
export const updateBlog = /* GraphQL */ `
  mutation UpdateBlog(
    $input: UpdateBlogInput!
    $condition: ModelBlogConditionInput
  ) {
    updateBlog(input: $input, condition: $condition) {
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
export const createPost = /* GraphQL */ `
  mutation CreatePost(
    $input: CreatePostInput!
    $condition: ModelPostConditionInput
  ) {
    createPost(input: $input, condition: $condition) {
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
          postID
          createdAt
          updatedAt
        }
        nextToken
      }
    }
  }
`;
export const updatePost = /* GraphQL */ `
  mutation UpdatePost(
    $input: UpdatePostInput!
    $condition: ModelPostConditionInput
  ) {
    updatePost(input: $input, condition: $condition) {
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
          postID
          createdAt
          updatedAt
        }
        nextToken
      }
    }
  }
`;
export const createAnswer = /* GraphQL */ `
  mutation CreateAnswer(
    $input: CreateAnswerInput!
    $condition: ModelAnswerConditionInput
  ) {
    createAnswer(input: $input, condition: $condition) {
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
export const updateAnswer = /* GraphQL */ `
  mutation UpdateAnswer(
    $input: UpdateAnswerInput!
    $condition: ModelAnswerConditionInput
  ) {
    updateAnswer(input: $input, condition: $condition) {
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
export const createComment = /* GraphQL */ `
  mutation CreateComment(
    $input: CreateCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    createComment(input: $input, condition: $condition) {
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
export const updateComment = /* GraphQL */ `
  mutation UpdateComment(
    $input: UpdateCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    updateComment(input: $input, condition: $condition) {
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
