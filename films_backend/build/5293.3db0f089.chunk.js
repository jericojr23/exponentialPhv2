"use strict";(self.webpackChunkfilms=self.webpackChunkfilms||[]).push([[5293],{75293:(n,e,o)=>{o.r(e),o.d(e,{configurations:()=>t,default:()=>r,from:()=>a});const t="configuraciones",a="de",r={"attribute.boolean":"Booleano","attribute.boolean.description":"Si o no, 1 o 0, verdadero o falso","attribute.component":"Componente","attribute.component.description":"Grupo de campos que puedes repetir o reutilizar","attribute.date":"Fecha","attribute.date.description":"Un selector de fechas con horas, minutos y segundos","attribute.datetime":"Fecha y hora","attribute.dynamiczone":"Zona din\xE1mica","attribute.dynamiczone.description":"Elija componentes din\xE1micamente al editar contenido","attribute.email":"Correo electr\xF3nico","attribute.email.description":"Campo de correo electr\xF3nico con formato de validaciones","attribute.enumeration":"Enumeraci\xF3n","attribute.enumeration.description":"Lista de valores, luego elija uno","attribute.json":"JSON","attribute.json.description":"Datos en formato JSON","attribute.media":"Media","attribute.media.description":"Archivos como im\xE1genes, videos, etc.","attribute.null":" ","attribute.number":"N\xFAmero","attribute.number.description":"N\xFAmeros (entero, flotante, decimal)","attribute.password":"Contrase\xF1a","attribute.password.description":"Campo de contrase\xF1a con cifrado","attribute.relation":"Relaci\xF3n","attribute.relation.description":"Se refiere a un Tipo de Colecci\xF3n","attribute.richtext":"Texto enriquecido","attribute.richtext.description":"Un editor de texto enriquecido con opciones de formato.","attribute.text":"Texto","attribute.text.description":"Texto corto o largo como t\xEDtulo o descripci\xF3n","attribute.time":"Hora","attribute.timestamp":"Marca de tiempo","attribute.uid":"UID","attribute.uid.description":"Identificador \xFAnico","button.attributes.add.another":"Agregar otro campo","button.component.add":"Agregar un componente","button.component.create":"Crear nuevo componente","button.model.create":"Crear nuevo Tipo de Colecci\xF3n","button.single-types.create":"Crear nuevo tipo \xFAnico","component.repeatable":"(repetible)","components.SelectComponents.displayed-value":"{number, plural, =0 {ning\xFAn componente seleccionado} one {1 componente seleccionado} other {# componentes seleccionados}}","components.componentSelect.no-component-available":"Ya ha agregado todos sus componentes","components.componentSelect.no-component-available.with-search":"No hay ning\xFAn componente que coincida con su b\xFAsqueda","components.componentSelect.value-component":"{number} componente seleccionado (escriba para buscar un componente)","components.componentSelect.value-components":"{number} componentes seleccionados",configurations:t,"contentType.apiId-plural.description":"ID de API pluralizado","contentType.apiId-plural.label":"ID de API (Plural)","contentType.apiId-singular.description":"El UID se utiliza para generar las rutas de la API y las tablas/colecciones de la base de datos","contentType.apiId-singular.label":"ID de API (Singular)","contentType.collectionName.description":"\xDAtil cuando el nombre de su Tipo de Contenido y el nombre de su tabla difieren","contentType.collectionName.label":"Nombre de la colecci\xF3n","contentType.displayName.label":"Nombre para mostrar","contentType.draftAndPublish.description":"Escribe un borrador de cada entrada antes de publicarla.","contentType.draftAndPublish.label":"Sistema de borrador/publicaci\xF3n","contentType.kind.change.warning":"Acaba de cambiar el Tipo de Contenido: la API se restablecer\xE1 (las rutas, los controladores y los servicios se sobrescribir\xE1n).","error.attributeName.reserved-name":"Este nombre no se puede utilizar en su Tipo de Contenido, ya que podr\xEDa romper otras funcionalidades.","error.contentType.pluralName-used":"Este valor no puede ser igual al valor singular","error.contentType.singularName-used":"Este valor no puede ser igual al valor plural","error.contentTypeName.reserved-name":"Este nombre no se puede utilizar en su proyecto, ya que podr\xEDa romper otras funcionalidades.","error.validation.enum-duplicate":"No se permiten valores duplicados","error.validation.enum-empty-string":"No se permiten cadenas de caracteres vac\xEDas","error.validation.minSupMax":"No puede ser superior","error.validation.positive":"Debe ser un n\xFAmero positivo","error.validation.regex":"El patr\xF3n de expresi\xF3n regular no es v\xE1lido","error.validation.relation.targetAttribute-taken":"Este nombre existe en el destino","form.attribute.component.option.add":"Agregar un componente","form.attribute.component.option.create":"Crea un nuevo componente","form.attribute.component.option.create.description":"Un componente se comparte entre tipos y componentes, estar\xE1 disponible y accesible en todas partes.","form.attribute.component.option.repeatable":"Componente repetible","form.attribute.component.option.repeatable.description":"Lo mejor para m\xFAltiples instancias (matriz) de ingredientes, meta etiquetas, etc.","form.attribute.component.option.reuse-existing":"Utilice un componente existente","form.attribute.component.option.reuse-existing.description":"Reutilice un componente ya creado para mantener la coherencia de sus datos en todos los tipos de contenido.","form.attribute.component.option.single":"Componente \xFAnico","form.attribute.component.option.single.description":"Lo mejor para agrupar campos como direcci\xF3n completa, informaci\xF3n principal...","form.attribute.item.customColumnName":"Nombres de columna personalizados","form.attribute.item.customColumnName.description":"Esto es \xFAtil para renombrar los nombres de las columnas de la base de datos en un formato m\xE1s completo para las respuestas de la API.","form.attribute.item.defineRelation.fieldName":"Nombre del campo","form.attribute.item.enumeration.graphql":"Sobreescritura de nombre para GraphQL","form.attribute.item.enumeration.graphql.description":"Le permite redefinir el nombre generado por defecto para GraphQL","form.attribute.item.enumeration.placeholder":`Ej:
ma\xF1ana
mediod\xEDa
noche`,"form.attribute.item.enumeration.rules":"Valores (una l\xEDnea por valor)","form.attribute.item.maximum":"Valor m\xE1ximo","form.attribute.item.maximumLength":"Longitud m\xE1xima","form.attribute.item.minimum":"Valor m\xEDnimo","form.attribute.item.minimumLength":"Longitud m\xEDnima","form.attribute.item.number.type":"Tipo de n\xFAmero","form.attribute.item.number.type.biginteger":"entero grande (ej: 123456789)","form.attribute.item.number.type.decimal":"decimal (ej: 2.22)","form.attribute.item.number.type.float":"flotante (ej: 3.3333333333)","form.attribute.item.number.type.integer":"entero (ej: 10)","form.attribute.item.privateField":"Campo privado","form.attribute.item.privateField.description":"Este campo no aparecer\xE1 en la respuesta de la API","form.attribute.item.requiredField":"Campo obligatorio","form.attribute.item.requiredField.description":"No podr\xE1 crear un registro si este campo est\xE1 vac\xEDo","form.attribute.item.text.regex":"Patr\xF3n de expresi\xF3n regular","form.attribute.item.text.regex.description":"El texto de la expresi\xF3n regular","form.attribute.item.uniqueField":"Campo \xFAnico","form.attribute.item.uniqueField.description":"No podr\xE1 crear un registro si ya existe otro registro con el mismo contenido","form.attribute.media.allowed-types":"Seleccionar tipos de multimedia permitidos","form.attribute.media.allowed-types.option-files":"Archivos","form.attribute.media.allowed-types.option-images":"Im\xE1genes","form.attribute.media.allowed-types.option-videos":"Videos","form.attribute.media.option.multiple":"M\xFAltiples multimedia","form.attribute.media.option.multiple.description":"Ideal para controles deslizantes, carruseles o descarga de varios archivos","form.attribute.media.option.single":"Multimedia \xFAnico","form.attribute.media.option.single.description":"Lo mejor para avatar, foto de perfil o portada","form.attribute.settings.default":"Valor por defecto","form.attribute.text.option.long-text":"Texto largo","form.attribute.text.option.long-text.description":"Mejor para descripciones o biograf\xEDa. La b\xFAsqueda exacta est\xE1 inhabilitada.","form.attribute.text.option.short-text":"Texto corto","form.attribute.text.option.short-text.description":"Mejor para t\xEDtulos, nombres, enlaces (URL). Tambi\xE9n permite una b\xFAsqueda exacta en el campo.","form.button.add-components-to-dynamiczone":"Agregar componentes a la zona","form.button.add-field":"Agregar otro campo","form.button.add-first-field-to-created-component":"Agregue el primer campo al componente","form.button.add.field.to.collectionType":"Agrega otro campo a este tipo de colecci\xF3n","form.button.add.field.to.component":"Agregar otro campo a este componente","form.button.add.field.to.contentType":"Agregar campo al Tipo de Contenido","form.button.add.field.to.singleType":"Agregue otro campo a este tipo \xFAnico","form.button.cancel":"Cancelar","form.button.collection-type.description":"Lo mejor para m\xFAltiples instancias como art\xEDculos, productos, comentarios, etc.","form.button.configure-component":"Configurar el componente","form.button.configure-view":"Configurar la vista","form.button.select-component":"Seleccione un componente","form.button.single-type.description":"Lo mejor para una sola instancia como acerca de nosotros, p\xE1gina de inicio, etc.",from:a,"listView.headerLayout.description":"Construya la arquitectura de datos de su contenido","modalForm.attribute.form.base.name.description":"No se permiten espacios para el nombre del atributo","modalForm.attribute.form.base.name.placeholder":"p. ej. slug, urlSeo, urlCan\xF3nica","modalForm.attribute.target-field":"Campo adjunto","modalForm.attributes.select-component":"Seleccione un componente","modalForm.attributes.select-components":"Seleccionar los componentes","modalForm.collectionType.header-create":"Crea un tipo de colecci\xF3n","modalForm.component.header-create":"Crea un componente","modalForm.components.create-component.category.label":"Seleccione una categor\xEDa o ingrese un nombre para crear una nueva","modalForm.components.icon.label":"Icono","modalForm.editCategory.base.name.description":"No se permiten espacios para el nombre de la categor\xEDa.","modalForm.header-edit":"Editar {name}","modalForm.header.categories":"Categor\xEDas","modalForm.header.back":"Atr\xE1s","modalForm.singleType.header-create":"Crea un tipo \xFAnico","modalForm.sub-header.addComponentToDynamicZone":"Agregar nuevo componente a la zona din\xE1mica","modalForm.sub-header.attribute.create":"Agregar nuevo campo {type}","modalForm.sub-header.attribute.create.step":"Agregar nuevo componente ({step}/2)","modalForm.sub-header.attribute.edit":"Editar {name}","modalForm.sub-header.chooseAttribute.collectionType":"Seleccione un campo para su Tipo de Colecci\xF3n","modalForm.sub-header.chooseAttribute.component":"Seleccione un campo para su componente","modalForm.sub-header.chooseAttribute.singleType":"Seleccione un campo para su tipo \xFAnico","modelPage.attribute.relation-polymorphic":"Relaci\xF3n (polim\xF3rfica)","modelPage.attribute.relationWith":"Vinculaci\xF3n con","notification.info.autoreaload-disable":"Se requiere la funci\xF3n autoReload para usar este plugin. Inicie su servidor con `strapi develop`","notification.info.creating.notSaved":"Guarde su trabajo antes de crear un nuevo tipo de colecci\xF3n o componente","plugin.description.long":"Modelice la estructura de datos de su API. Cree nuevos campos y relaciones en s\xF3lo un minuto. Los archivos se crean y actualizan autom\xE1ticamente en el proyecto.","plugin.description.short":"Modelice la estructura de datos de su API.","plugin.name":"Generador de Tipo de Contenido","popUpForm.navContainer.advanced":"Configuraci\xF3n avanzada","popUpForm.navContainer.base":"Ajustes b\xE1sicos","popUpWarning.bodyMessage.cancel-modifications":"\xBFEst\xE1s seguro de que deseas cancelar tus modificaciones?","popUpWarning.bodyMessage.cancel-modifications.with-components":"\xBFEst\xE1 seguro de que desea cancelar sus modificaciones? Algunos componentes han sido creados o modificados...","popUpWarning.bodyMessage.category.delete":"\xBFEst\xE1 seguro de que desea eliminar esta categor\xEDa? Tambi\xE9n se eliminar\xE1n todos los componentes.","popUpWarning.bodyMessage.component.delete":"\xBFEst\xE1 seguro de que desea eliminar este componente?","popUpWarning.bodyMessage.contentType.delete":"\xBFEst\xE1 seguro de que desea eliminar este Tipo de Contenido?","popUpWarning.draft-publish.button.confirm":"S\xED, deshabilitar","popUpWarning.draft-publish.message":"Si desactiva el sistema Borrador/Publicaci\xF3n, se eliminar\xE1n sus borradores.","popUpWarning.draft-publish.second-message":"\xBFEst\xE1s seguro de que quieres desactivarlo?","prompt.unsaved":"\xBFEst\xE1s seguro que quieres irte? Todas sus modificaciones se perder\xE1n.","relation.attributeName.placeholder":"Ej: autor, categor\xEDa, etiqueta","relation.manyToMany":"tiene y pertenece a muchos","relation.manyToOne":"tiene muchos","relation.manyWay":"tiene muchas","relation.oneToMany":"pertenece a muchos","relation.oneToOne":"tiene y pertenece a una","relation.oneWay":"tiene uno","table.button.no-fields":"Agregar campo","table.content.create-first-content-type":"Crea tu primer Tipo de Colecci\xF3n","table.content.no-fields.collection-type":"Agrega tu primer campo a este Tipo de Colecci\xF3n","table.content.no-fields.component":"Agregar tu primer campo a este componente"}}}]);
