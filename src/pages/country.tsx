import React from 'react';
import { 
  List, 
  Edit,
  Create,
  Datagrid,
  TextField,
  DisabledInput,
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
import countryIcon from 'material-ui/svg-icons/social/public';

export const CountryIcon = countryIcon;

const CountryPagination = () => {
    return ""
}

export const CountryList = (props) => (
  <List {...props} pagination={<CountryPagination />}>
    <Responsive
      small={
        <SimpleList
          primaryText={record => record.name}
          secondaryText={record => record.code}
          tertiaryText={record => record.id}
        />
      }
      medium={
        <Datagrid bodyOptions={{ showRowHover: true }}>
          <TextField source="id" sortable={false} />
          <TextField source="code" sortable={false} />
          <TextField source="name" sortable={false} />
          <BooleanField source="active" sortable={false} />
          <ShowButton />
        </Datagrid>
      }
    />
  </List>
);

export const CountryShow = (props) => (
  <Show title={<CountryTitle />} {...props}>
      <SimpleShowLayout>
        <TextField source="id" />
        <TextField source="code" />
        <TextField source="name" />
        <BooleanField source="active" headerStyle={{ textAlign: 'left' }} elStyle={{ float: 'left' }} />
      </SimpleShowLayout>
  </Show>
);

const CountryTitle = translate(({ record, translate }) =>  
  <span>{translate('resources.Country.name', { smart_count: 1 })} {record.name}</span>
);

export const CountryEdit = (props) => (
  <Edit title={<CountryTitle />} {...props}>
    <SimpleForm>
      <DisabledInput source="id"  />
      <TextInput source="code" validate={required} />
      <TextInput source="name" validate={required}  />
      <NullableBooleanInput  source="active" allowEmpty={false} validate={required} />
    </SimpleForm>
  </Edit>
);

export const CountryCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="code" validate={required} />
      <TextInput source="name" validate={required} />
      <NullableBooleanInput  source="active" allowEmpty={false} validate={required} />
    </SimpleForm>
  </Create>
);
