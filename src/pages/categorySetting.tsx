import React from 'react';
import { 
  List, 
  Edit,
  Create,
  Datagrid,
  TextField,
  DisabledInput,
  LongTextInput,
  SimpleForm,
  TextInput,
  translate,
  required,
  Show,
  SimpleShowLayout,
  ShowButton,
  Responsive,
  SimpleList,
  BooleanField,
  NullableBooleanInput } from 'admin-on-rest';
import categorySettingIcon from 'material-ui/svg-icons/action/bookmark';

export const CategorySettingIcon = categorySettingIcon;

const CategorySettingPagination = () => {
    return ""
}

export const CategorySettingList = (props) => (
  <List {...props} pagination={<CategorySettingPagination />}>
    <Responsive
      small={
        <SimpleList
            primaryText={record => record.name}
            secondaryText={record => record.description}
            tertiaryText={record => record.id}
        />
      }
      medium={
        <Datagrid bodyOptions={{ showRowHover: true }}>
          <TextField source="id" sortable={false} />
          <TextField source="code" sortable={false} />
          <TextField source="name" sortable={false} />
          <TextField source="title" sortable={false}/>
          <TextField source="description" sortable={false} />
          <BooleanField source="active" />
          <ShowButton />
        </Datagrid>
      }
    />
  </List>
);

export const CategorySettingShow = (props) => (
  <Show title={<CategorySettingTitle />} {...props}>
      <SimpleShowLayout>
        <TextField source="id" />
        <TextField source="code" />
        <TextField source="name" />
        <TextField source="title" />
        <TextField source="description" />
        <BooleanField source="active" headerStyle={{ textAlign: 'left' }} elStyle={{ float: 'left' }} />
      </SimpleShowLayout>
  </Show>
);

const CategorySettingTitle = translate(({ record, translate }) =>  
  <span>{translate('resources.CategorySetting.name', { smart_count: 1 })} {record.name}</span>
);

export const CategorySettingEdit = (props) => (
  <Edit title={<CategorySettingTitle />} {...props}>
    <SimpleForm>
      <DisabledInput source="id"  />
      <TextInput source="code" validate={required} />
      <TextInput source="name" validate={required}  />
      <TextInput source="title" validate={required}  />
      <LongTextInput source="description" validate={required} />
      <NullableBooleanInput  source="active" allowEmpty={false} validate={required} />
    </SimpleForm>
  </Edit>
);

export const CategorySettingCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="code" validate={required} />
      <TextInput source="name" validate={required} />
      <TextInput source="title" validate={required}  />
      <LongTextInput source="description" validate={required}  />
      <NullableBooleanInput  source="active" allowEmpty={false} validate={required} />
    </SimpleForm>
  </Create>
);
