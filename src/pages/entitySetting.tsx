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
  NullableBooleanInput,
  ReferenceField,
  SelectInput,
  ReferenceInput } from 'admin-on-rest';
import entitySettingIcon from 'material-ui/svg-icons/action/card-travel';  

export const EntitySettingIcon = entitySettingIcon;

const EntitySettingPagination = () => {
    return ""
}

export const EntitySettingList = (props) => (
  <List {...props} pagination={<EntitySettingPagination />}>
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
          <ReferenceField source="businessUnit.id" reference="BusinessUnit" linkType="show" sortable={false}>
            <TextField source="name" />
          </ReferenceField>
          <BooleanField source="active" sortable={false} />
          <ShowButton />
        </Datagrid>
      }
    />
  </List>
);

export const EntitySettingShow = (props) => (
  <Show title={<EntitySettingTitle />} {...props}>
      <SimpleShowLayout>
        <TextField source="id" />
        <TextField source="code"  />
        <TextField source="name" />
        <TextField source="description" />
        <ReferenceField source="businessUnit.id" reference="BusinessUnit" linkType="show" >
          <TextField source="name" />
        </ReferenceField>
        <BooleanField source="active" headerStyle={{ textAlign: 'left' }} elStyle={{ float: 'left' }} />
      </SimpleShowLayout>
  </Show>
);

const EntitySettingTitle = translate(({ record, translate }) =>  
  <span>{translate('resources.EntitySetting.name', { smart_count: 1 })} {record.name}</span>
);

export const EntitySettingEdit = (props) => (
  <Edit title={<EntitySettingTitle />} {...props}>
    <SimpleForm>
      <DisabledInput source="id"  />
      <TextInput source="code" validate={required} />
      <TextInput source="name" validate={required}  />
      <LongTextInput source="description" validate={required}  />
      <ReferenceInput source="businessUnit.id" reference="BusinessUnit" allowEmpty validate={required}>
        <SelectInput optionText="name" />
      </ReferenceInput>
      <NullableBooleanInput  source="active" allowEmpty={false} validate={required} />
    </SimpleForm>
  </Edit>
);

export const EntitySettingCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="code" validate={required} />
      <TextInput source="name" validate={required} />
      <LongTextInput source="description" validate={required}  />
      <ReferenceInput source="businessUnit.id" reference="BusinessUnit" allowEmpty validate={required}>
        <SelectInput optionText="name" />
      </ReferenceInput>
      <NullableBooleanInput  source="active" allowEmpty={false} validate={required} />
    </SimpleForm>
  </Create>
);
