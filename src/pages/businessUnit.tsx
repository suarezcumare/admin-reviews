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
  ReferenceField,
  ReferenceInput,
  SelectInput,
  Responsive,
  SimpleList,
  BooleanField,
  NullableBooleanInput } from 'admin-on-rest';
import businessUnitIcon from 'material-ui/svg-icons/communication/business';

export const BusinessUnitIcon = businessUnitIcon;

const BusinessUnitPagination = () => {
    return ""
}

export const BusinessUnitList = (props) => (
  <List {...props} pagination={<BusinessUnitPagination />}>
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
          <ReferenceField source="country.id" reference="Country" linkType="show" sortable={false}>
              <TextField source="name" />
          </ReferenceField>
          <ReferenceField source="reviewSetting.id" reference="ReviewSetting" linkType="show" sortable={false}>
              <TextField source="id" />
          </ReferenceField>
          <BooleanField source="active" />
          <ShowButton />
        </Datagrid>
      }
    />
  </List>
);

export const BusinessUnitShow = (props) => (
  <Show title={<BusinessUnitTitle />} {...props}>
      <SimpleShowLayout>
        <TextField source="id" />
        <TextField source="code" />
        <TextField source="name" />
        <ReferenceField source="country.id" reference="Country" linkType="show">
          <TextField source="name" />
        </ReferenceField>
        <ReferenceField source="reviewSetting.id" reference="ReviewSetting" linkType="show" >
          <TextField source="id" />
        </ReferenceField>
        <BooleanField source="active" />
      </SimpleShowLayout>
  </Show>
);

const BusinessUnitTitle = translate(({ record, translate }) =>  
  <span>{translate('resources.BusinessUnit.name', { smart_count: 1 })} {record.name}</span>
);

export const BusinessUnitEdit = (props) => (
  <Edit title={<BusinessUnitTitle />} {...props}>
    <SimpleForm>
      <DisabledInput source="id"  />
      <TextInput source="code" validate={required} />
      <TextInput source="name" validate={required}  />
      <ReferenceInput source="country.id" reference="Country" allowEmpty validate={required}>
        <SelectInput optionText="name" />
      </ReferenceInput>
      <ReferenceInput source="reviewSetting.id" reference="ReviewSetting" allowEmpty validate={required} >
        <SelectInput optionText="id" />
      </ReferenceInput>
      <NullableBooleanInput  source="active" allowEmpty={false} validate={required} />
    </SimpleForm>
  </Edit>
);

export const BusinessUnitCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="code" validate={required} />
      <TextInput source="name" validate={required} />
      <ReferenceInput source="country.id" reference="Country" allowEmpty validate={required}>
        <SelectInput optionText="name" />
      </ReferenceInput>
      <ReferenceInput source="reviewSetting.id" reference="ReviewSetting" allowEmpty validate={required} >
        <SelectInput optionText="id" />
      </ReferenceInput>
      <NullableBooleanInput  source="active" allowEmpty={false} validate={required} />
    </SimpleForm>
  </Create>
);
