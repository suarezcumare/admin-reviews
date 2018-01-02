export default {
  'Validation error': 'El registro ya existe o el registro presenta errores de validación',
  dashboard: {
    welcome: "Bienvenido",
    text: "alguna informacion aqui general"
  },
  resources: {
    Country: {
      name: 'Pais |||| Paises',
      fields: {
        name: 'Nombre',
        id: 'Id',
        code: 'Codigo'
      }
    },
    BusinessUnit: {
      name: 'Unida de Negocio |||| Unidades de Negocios',
      reviewSetting: {id: 'Configuración de revisión', active: 'Configuración de revisión'},
      fields: {
        country: { id: 'Pais', name: 'Pais' },
        reviewSettings: {id: 'Configuración de revisión'},
        name: 'Nombre',
        id: 'Id',
        code: 'Codigo',
      }
    },
    CategorySetting: {
      name: 'Clasificación |||| Clasificaciones',
      fields: {
        name: 'Nombre',
        id: 'Id',
        code: 'Codigo',
        description: 'Descricción',
      }
    },
    EntitySetting: {
      name: 'Entidad |||| Entidades',
      fields: {
        businessUnit: {id: 'Unida de Negocio'},
        name: 'Nombre',
        id: 'Id',
        code: 'Codigo',
        active: 'Activo',
        description: 'Descricción',
      }
    },
    RatingSetting: {
      name: 'Categoria |||| Categorias',
      fields: {
        name: 'Nombre',
        id: 'Id',
        code: 'Codigo',
        title: 'Titulo',
        description: 'Descricción',
      }
    },
    ReviewCategorySetting: {
      name: 'Revisión de categoria |||| Revisión de categorias',
      fields: {
        reviewSetting: { id: "Configuración de revisión"},
        categorySetting: { id: "Configuración de categoria"},
        id: 'Id',
      }
    },
    ReviewSetting: {
      name: 'Configurar Revisión |||| Configurar Revisiones',
      fields: {
        ratingSetting: { id: "Configuración de Categoria"},
        businessUnit: { id: "Unida de Negocio"},
        id: 'Id',
        detailed: 'Detalle',
        ratingSettingId: 'Configuración de clasificación',
      }
    },
    Review: {
      name: 'Revisión |||| Revisiones',
      fields: {
        reviewSetting: { id: "Configuración de revisión"},
        id: 'Id',
        comment: 'Comentario',
        value: 'Valor',
        active: 'Activo',
        published: 'Publicado',
        userId: 'Usuario ID',
        userName: 'Nombre del usuario',
        externalEntityId: 'Entidad externa',
        reviewSettingId: 'Configuración de Revisión'
      }
    },
  },
  aor: {
    action: {
      delete: 'Eliminar',
      show: 'Ver',
      list: 'Lista',
      save: 'Guardar',
      create: 'Crear',
      edit: 'Editar',
      cancel: 'Cancelar',
      refresh: 'Actualizar',
      add_filter: 'Agregar filtro',
      remove_filter: 'Eliminar el filtro',
      back: 'Regresar'
    },
    boolean: {
      true: 'Si',
      false: 'No'
    },
    page: {
      list: 'Lista de %{name}',
      edit: '%{name} #%{id}',
      show: '%{name} #%{id}',
      create: 'Creando %{name}',
      delete: 'Eliminado %{name} #%{id}',
      dashboard: 'Inicio',
      not_found: 'No encontrado'
    },
    input: {
      file: {
        upload_several:
            'Click para selecionar un archivo',
        upload_single: 'Click para selecionar un archivo',
      },
      image: {
        upload_several:
            'Click para selecionar una imagen',
        upload_single:
            'Click para selecionar una imagen',
      },
    },
    message: {
      yes: 'Si',
      no: 'No',
      are_you_sure: '¿Estas Seguro?',
      about: 'Acerca',
      not_found:
          'O bien escribió una URL incorrecta o siguió un enlace incorrecto.',
    },
    navigation: {
      no_results: 'No se encontraron resultados',
      page_out_of_boundaries: 'Pagina numero %{page}',
      page_out_from_end: 'No exiten mas paginas',
      page_out_from_begin: 'No existen paginas antes',
      page_range_info: '%{offsetBegin}-%{offsetEnd} of %{total}',
      next: 'Proximo',
      prev: 'Atras',
    },
    auth: {
      username: 'Usuario',
      password: 'Contraseña',
      sign_in: 'Iniciar Sesion',
      sign_in_error: 'La autentificacion fallo, vuelve a intentar',
      logout: 'Cerrar Sesion',
    },
    notification: {
      updated: 'Elemento Actualizado',
      created: 'Elemento creado',
      deleted: 'Elemento eliminado',
      item_doesnt_exist: 'Elemente no existe',
      http_error: 'Error con el servidor'
    },
    validation: {
      required: 'Requerido',
      minLength: 'Debe ser al menos %{min} caracteres',
      maxLength: 'Debe ser maximos %{max} de caracteres',
      minValue: 'Debe ser al menos %{min}',
      maxValue: 'Debe ser %{max} o menos',
      number: 'Debe ser un numero',
      email: 'Debe ser un email valido',
    },
  },
};