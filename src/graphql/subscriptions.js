/* eslint-disable */
// this is an auto generated file. This will be overwritten

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
export const onCreateTecnico = /* GraphQL */ `
  subscription OnCreateTecnico {
    onCreateTecnico {
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
export const onUpdateTecnico = /* GraphQL */ `
  subscription OnUpdateTecnico {
    onUpdateTecnico {
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
export const onDeleteTecnico = /* GraphQL */ `
  subscription OnDeleteTecnico {
    onDeleteTecnico {
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
export const onCreateEquipo = /* GraphQL */ `
  subscription OnCreateEquipo {
    onCreateEquipo {
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
export const onUpdateEquipo = /* GraphQL */ `
  subscription OnUpdateEquipo {
    onUpdateEquipo {
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
export const onDeleteEquipo = /* GraphQL */ `
  subscription OnDeleteEquipo {
    onDeleteEquipo {
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
export const onCreateCliente = /* GraphQL */ `
  subscription OnCreateCliente {
    onCreateCliente {
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
export const onUpdateCliente = /* GraphQL */ `
  subscription OnUpdateCliente {
    onUpdateCliente {
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
export const onDeleteCliente = /* GraphQL */ `
  subscription OnDeleteCliente {
    onDeleteCliente {
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
export const onCreateOrdenServicio = /* GraphQL */ `
  subscription OnCreateOrdenServicio {
    onCreateOrdenServicio {
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
export const onUpdateOrdenServicio = /* GraphQL */ `
  subscription OnUpdateOrdenServicio {
    onUpdateOrdenServicio {
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
export const onDeleteOrdenServicio = /* GraphQL */ `
  subscription OnDeleteOrdenServicio {
    onDeleteOrdenServicio {
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
export const onCreateOfertaTrabajo = /* GraphQL */ `
  subscription OnCreateOfertaTrabajo {
    onCreateOfertaTrabajo {
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
export const onUpdateOfertaTrabajo = /* GraphQL */ `
  subscription OnUpdateOfertaTrabajo {
    onUpdateOfertaTrabajo {
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
export const onDeleteOfertaTrabajo = /* GraphQL */ `
  subscription OnDeleteOfertaTrabajo {
    onDeleteOfertaTrabajo {
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
export const onCreateAspirante = /* GraphQL */ `
  subscription OnCreateAspirante {
    onCreateAspirante {
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
export const onUpdateAspirante = /* GraphQL */ `
  subscription OnUpdateAspirante {
    onUpdateAspirante {
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
export const onDeleteAspirante = /* GraphQL */ `
  subscription OnDeleteAspirante {
    onDeleteAspirante {
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
export const onCreateBlog = /* GraphQL */ `
  subscription OnCreateBlog {
    onCreateBlog {
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
export const onUpdateBlog = /* GraphQL */ `
  subscription OnUpdateBlog {
    onUpdateBlog {
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
export const onDeleteBlog = /* GraphQL */ `
  subscription OnDeleteBlog {
    onDeleteBlog {
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
export const onCreatePost = /* GraphQL */ `
  subscription OnCreatePost {
    onCreatePost {
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
export const onUpdatePost = /* GraphQL */ `
  subscription OnUpdatePost {
    onUpdatePost {
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
export const onDeletePost = /* GraphQL */ `
  subscription OnDeletePost {
    onDeletePost {
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
export const onCreateAnswer = /* GraphQL */ `
  subscription OnCreateAnswer {
    onCreateAnswer {
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
export const onUpdateAnswer = /* GraphQL */ `
  subscription OnUpdateAnswer {
    onUpdateAnswer {
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
export const onDeleteAnswer = /* GraphQL */ `
  subscription OnDeleteAnswer {
    onDeleteAnswer {
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
export const onCreateComment = /* GraphQL */ `
  subscription OnCreateComment {
    onCreateComment {
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
export const onUpdateComment = /* GraphQL */ `
  subscription OnUpdateComment {
    onUpdateComment {
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
export const onDeleteComment = /* GraphQL */ `
  subscription OnDeleteComment {
    onDeleteComment {
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
