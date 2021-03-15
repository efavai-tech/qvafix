/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateTaller = /* GraphQL */ `
  subscription OnCreateTaller {
    onCreateTaller {
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
export const onUpdateTaller = /* GraphQL */ `
  subscription OnUpdateTaller {
    onUpdateTaller {
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
export const onDeleteTaller = /* GraphQL */ `
  subscription OnDeleteTaller {
    onDeleteTaller {
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
export const onCreatePiezas = /* GraphQL */ `
  subscription OnCreatePiezas {
    onCreatePiezas {
      id
      nombre
      precio
      cantidad
      createdAt
      updatedAt
    }
  }
`;
export const onUpdatePiezas = /* GraphQL */ `
  subscription OnUpdatePiezas {
    onUpdatePiezas {
      id
      nombre
      precio
      cantidad
      createdAt
      updatedAt
    }
  }
`;
export const onDeletePiezas = /* GraphQL */ `
  subscription OnDeletePiezas {
    onDeletePiezas {
      id
      nombre
      precio
      cantidad
      createdAt
      updatedAt
    }
  }
`;
export const onCreateTecnico = /* GraphQL */ `
  subscription OnCreateTecnico($owner: String) {
    onCreateTecnico(owner: $owner) {
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
export const onUpdateTecnico = /* GraphQL */ `
  subscription OnUpdateTecnico($owner: String) {
    onUpdateTecnico(owner: $owner) {
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
export const onDeleteTecnico = /* GraphQL */ `
  subscription OnDeleteTecnico($owner: String) {
    onDeleteTecnico(owner: $owner) {
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
export const onCreateEquipo = /* GraphQL */ `
  subscription OnCreateEquipo($owner: String) {
    onCreateEquipo(owner: $owner) {
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
export const onUpdateEquipo = /* GraphQL */ `
  subscription OnUpdateEquipo($owner: String) {
    onUpdateEquipo(owner: $owner) {
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
export const onDeleteEquipo = /* GraphQL */ `
  subscription OnDeleteEquipo($owner: String) {
    onDeleteEquipo(owner: $owner) {
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
export const onCreateCliente = /* GraphQL */ `
  subscription OnCreateCliente($owner: String) {
    onCreateCliente(owner: $owner) {
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
export const onUpdateCliente = /* GraphQL */ `
  subscription OnUpdateCliente($owner: String) {
    onUpdateCliente(owner: $owner) {
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
export const onDeleteCliente = /* GraphQL */ `
  subscription OnDeleteCliente($owner: String) {
    onDeleteCliente(owner: $owner) {
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
export const onCreateOrdenServicio = /* GraphQL */ `
  subscription OnCreateOrdenServicio($owner: String) {
    onCreateOrdenServicio(owner: $owner) {
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
export const onUpdateOrdenServicio = /* GraphQL */ `
  subscription OnUpdateOrdenServicio($owner: String) {
    onUpdateOrdenServicio(owner: $owner) {
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
export const onDeleteOrdenServicio = /* GraphQL */ `
  subscription OnDeleteOrdenServicio($owner: String) {
    onDeleteOrdenServicio(owner: $owner) {
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
export const onCreateOfertaTrabajo = /* GraphQL */ `
  subscription OnCreateOfertaTrabajo($owner: String) {
    onCreateOfertaTrabajo(owner: $owner) {
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
export const onUpdateOfertaTrabajo = /* GraphQL */ `
  subscription OnUpdateOfertaTrabajo($owner: String) {
    onUpdateOfertaTrabajo(owner: $owner) {
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
export const onDeleteOfertaTrabajo = /* GraphQL */ `
  subscription OnDeleteOfertaTrabajo($owner: String) {
    onDeleteOfertaTrabajo(owner: $owner) {
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
export const onCreateAspirante = /* GraphQL */ `
  subscription OnCreateAspirante {
    onCreateAspirante {
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
export const onUpdateAspirante = /* GraphQL */ `
  subscription OnUpdateAspirante {
    onUpdateAspirante {
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
export const onDeleteAspirante = /* GraphQL */ `
  subscription OnDeleteAspirante {
    onDeleteAspirante {
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
export const onCreateBlog = /* GraphQL */ `
  subscription OnCreateBlog($owner: String) {
    onCreateBlog(owner: $owner) {
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
export const onUpdateBlog = /* GraphQL */ `
  subscription OnUpdateBlog($owner: String) {
    onUpdateBlog(owner: $owner) {
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
export const onDeleteBlog = /* GraphQL */ `
  subscription OnDeleteBlog($owner: String) {
    onDeleteBlog(owner: $owner) {
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
export const onCreatePost = /* GraphQL */ `
  subscription OnCreatePost($owner: String) {
    onCreatePost(owner: $owner) {
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
export const onUpdatePost = /* GraphQL */ `
  subscription OnUpdatePost($owner: String) {
    onUpdatePost(owner: $owner) {
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
export const onDeletePost = /* GraphQL */ `
  subscription OnDeletePost($owner: String) {
    onDeletePost(owner: $owner) {
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
export const onCreateAnswer = /* GraphQL */ `
  subscription OnCreateAnswer($owner: String) {
    onCreateAnswer(owner: $owner) {
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
export const onUpdateAnswer = /* GraphQL */ `
  subscription OnUpdateAnswer($owner: String) {
    onUpdateAnswer(owner: $owner) {
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
export const onDeleteAnswer = /* GraphQL */ `
  subscription OnDeleteAnswer($owner: String) {
    onDeleteAnswer(owner: $owner) {
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
export const onCreateComment = /* GraphQL */ `
  subscription OnCreateComment($owner: String) {
    onCreateComment(owner: $owner) {
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
export const onUpdateComment = /* GraphQL */ `
  subscription OnUpdateComment($owner: String) {
    onUpdateComment(owner: $owner) {
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
export const onDeleteComment = /* GraphQL */ `
  subscription OnDeleteComment($owner: String) {
    onDeleteComment(owner: $owner) {
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
