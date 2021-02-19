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
      administradorID
      createdAt
      updatedAt
    }
  }
`;
export const onCreateTelefono = /* GraphQL */ `
  subscription OnCreateTelefono {
    onCreateTelefono {
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
        administradorID
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateTelefono = /* GraphQL */ `
  subscription OnUpdateTelefono {
    onUpdateTelefono {
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
        administradorID
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteTelefono = /* GraphQL */ `
  subscription OnDeleteTelefono {
    onDeleteTelefono {
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
        administradorID
        createdAt
        updatedAt
      }
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
  subscription OnCreateTecnico {
    onCreateTecnico {
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
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateTecnico = /* GraphQL */ `
  subscription OnUpdateTecnico {
    onUpdateTecnico {
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
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteTecnico = /* GraphQL */ `
  subscription OnDeleteTecnico {
    onDeleteTecnico {
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
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreateEquipo = /* GraphQL */ `
  subscription OnCreateEquipo {
    onCreateEquipo {
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
export const onUpdateEquipo = /* GraphQL */ `
  subscription OnUpdateEquipo {
    onUpdateEquipo {
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
export const onDeleteEquipo = /* GraphQL */ `
  subscription OnDeleteEquipo {
    onDeleteEquipo {
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
export const onCreateCliente = /* GraphQL */ `
  subscription OnCreateCliente {
    onCreateCliente {
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
export const onUpdateCliente = /* GraphQL */ `
  subscription OnUpdateCliente {
    onUpdateCliente {
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
export const onDeleteCliente = /* GraphQL */ `
  subscription OnDeleteCliente {
    onDeleteCliente {
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
export const onCreateOrdenServicio = /* GraphQL */ `
  subscription OnCreateOrdenServicio {
    onCreateOrdenServicio {
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
          administradorID
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
export const onUpdateOrdenServicio = /* GraphQL */ `
  subscription OnUpdateOrdenServicio {
    onUpdateOrdenServicio {
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
          administradorID
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
export const onDeleteOrdenServicio = /* GraphQL */ `
  subscription OnDeleteOrdenServicio {
    onDeleteOrdenServicio {
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
          administradorID
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
export const onCreateOfertaTrabajo = /* GraphQL */ `
  subscription OnCreateOfertaTrabajo {
    onCreateOfertaTrabajo {
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
    }
  }
`;
export const onUpdateOfertaTrabajo = /* GraphQL */ `
  subscription OnUpdateOfertaTrabajo {
    onUpdateOfertaTrabajo {
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
    }
  }
`;
export const onDeleteOfertaTrabajo = /* GraphQL */ `
  subscription OnDeleteOfertaTrabajo {
    onDeleteOfertaTrabajo {
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
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreateBlog = /* GraphQL */ `
  subscription OnCreateBlog {
    onCreateBlog {
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
export const onUpdateBlog = /* GraphQL */ `
  subscription OnUpdateBlog {
    onUpdateBlog {
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
export const onDeleteBlog = /* GraphQL */ `
  subscription OnDeleteBlog {
    onDeleteBlog {
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
export const onCreatePost = /* GraphQL */ `
  subscription OnCreatePost {
    onCreatePost {
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
          postID
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
export const onUpdatePost = /* GraphQL */ `
  subscription OnUpdatePost {
    onUpdatePost {
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
          postID
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
export const onDeletePost = /* GraphQL */ `
  subscription OnDeletePost {
    onDeletePost {
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
          postID
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
export const onCreateAnswer = /* GraphQL */ `
  subscription OnCreateAnswer {
    onCreateAnswer {
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
export const onUpdateAnswer = /* GraphQL */ `
  subscription OnUpdateAnswer {
    onUpdateAnswer {
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
export const onDeleteAnswer = /* GraphQL */ `
  subscription OnDeleteAnswer {
    onDeleteAnswer {
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
export const onCreateComment = /* GraphQL */ `
  subscription OnCreateComment {
    onCreateComment {
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
export const onUpdateComment = /* GraphQL */ `
  subscription OnUpdateComment {
    onUpdateComment {
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
export const onDeleteComment = /* GraphQL */ `
  subscription OnDeleteComment {
    onDeleteComment {
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
