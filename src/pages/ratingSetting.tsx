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
import ratingSettingIcon from 'material-ui/svg-icons/action/swap-vert';  

export const RatingSettingIcon = ratingSettingIcon;

const RatingSettingPagination = () => {
    return ""
}

export const RatingSettingList = (props) => (
  <List {...props} pagination={<RatingSettingPagination />}>
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
          <TextField source="description" sortable={false} />
          <BooleanField source="active" sortable={false} />
          <ShowButton />
        </Datagrid>
      }
    />
  </List>
);

export const RatingSettingShow = (props) => (
  <Show title={<RatingSettingTitle />} {...props}>
      <SimpleShowLayout>
        <TextField source="id" />
        <TextField source="code"  />
        <TextField source="name" />
        <TextField source="description" />
        <BooleanField source="active" headerStyle={{ textAlign: 'left' }} elStyle={{ float: 'left' }} />
      </SimpleShowLayout>
  </Show>
);

const RatingSettingTitle = translate(({ record, translate }) =>  
  <span>{translate('resources.RatingSetting.name', { smart_count: 1 })} {record.name}</span>
);

export const RatingSettingEdit = (props) => (
  <Edit title={<RatingSettingTitle />} {...props}>
    <SimpleForm>
      <DisabledInput source="id"  />
      <TextInput source="code" validate={required} />
      <TextInput source="name" validate={required}  />
      <LongTextInput source="description" validate={required}  />
      <NullableBooleanInput  source="active" allowEmpty={false} validate={required} />
    </SimpleForm>
  </Edit>
);

export const RatingSettingCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="code" validate={required} />
      <TextInput source="name" validate={required} />
      <LongTextInput source="description" validate={required}  />
      <NullableBooleanInput  source="active" allowEmpty={false} validate={required} />
    </SimpleForm>
  </Create>
);
