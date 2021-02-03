/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateTaller = /* GraphQL */ `
  subscription OnCreateTaller {
    onCreateTaller {
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
export const onUpdateTaller = /* GraphQL */ `
  subscription OnUpdateTaller {
    onUpdateTaller {
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
export const onDeleteTaller = /* GraphQL */ `
  subscription OnDeleteTaller {
    onDeleteTaller {
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
export const onCreateOfertasTrabajo = /* GraphQL */ `
  subscription OnCreateOfertasTrabajo {
    onCreateOfertasTrabajo {
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
export const onUpdateOfertasTrabajo = /* GraphQL */ `
  subscription OnUpdateOfertasTrabajo {
    onUpdateOfertasTrabajo {
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
export const onDeleteOfertasTrabajo = /* GraphQL */ `
  subscription OnDeleteOfertasTrabajo {
    onDeleteOfertasTrabajo {
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
      comments {
        items {
          id
          postID
          content
          user
          createdAt
          updatedAt
        }
        nextToken
      }
      answer {
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
      comments {
        items {
          id
          postID
          content
          user
          createdAt
          updatedAt
        }
        nextToken
      }
      answer {
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
      comments {
        items {
          id
          postID
          content
          user
          createdAt
          updatedAt
        }
        nextToken
      }
      answer {
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
export const onCreateComment = /* GraphQL */ `
  subscription OnCreateComment {
    onCreateComment {
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
        answer {
          nextToken
        }
        createdAt
        updatedAt
      }
      content
      user
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateComment = /* GraphQL */ `
  subscription OnUpdateComment {
    onUpdateComment {
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
        answer {
          nextToken
        }
        createdAt
        updatedAt
      }
      content
      user
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteComment = /* GraphQL */ `
  subscription OnDeleteComment {
    onDeleteComment {
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
        answer {
          nextToken
        }
        createdAt
        updatedAt
      }
      content
      user
      createdAt
      updatedAt
    }
  }
`;
export const onCreateAnswer = /* GraphQL */ `
  subscription OnCreateAnswer {
    onCreateAnswer {
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
        answer {
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
export const onUpdateAnswer = /* GraphQL */ `
  subscription OnUpdateAnswer {
    onUpdateAnswer {
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
        answer {
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
export const onDeleteAnswer = /* GraphQL */ `
  subscription OnDeleteAnswer {
    onDeleteAnswer {
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
        answer {
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
