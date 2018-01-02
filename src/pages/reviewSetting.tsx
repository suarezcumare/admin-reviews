import React from 'react';
import { 
  List, 
  Edit,
  Create,
  Datagrid,
  TextField,
  DisabledInput,
  SimpleForm,
  translate,
  required,
  Show,
  SimpleShowLayout,
  ShowButton,
  ReferenceField,
  SelectInput,
  ReferenceInput,
  BooleanField,
  NullableBooleanInput,
  Responsive,
  SimpleList } from 'admin-on-rest';

import reviewSettingIcon from 'material-ui/svg-icons/action/build';

export const ReviewSettingIcon = reviewSettingIcon;

const ReviewSettingPagination = () => {
    return ""
}

export const ReviewSettingList = (props) => (
  <List {...props} pagination={<ReviewSettingPagination />}>
    <Responsive
      small={
        <SimpleList
            primaryText={record => record.ratingSetting.name}
            secondaryText={record => record.detailed}
            tertiaryText={record => record.id}
        />
      }
      medium={
        <Datagrid bodyOptions={{ showRowHover: true }}>
          <TextField source="id" sortable={false} />
          <BooleanField source="detailed" sortable={false}/>
          <ReferenceField source="ratingSetting.id" reference="RatingSetting" linkType="show" sortable={false}>
            <TextField source="name" />
          </ReferenceField>
          <BooleanField source="active" sortable={false} />
          <ShowButton />
        </Datagrid>
      }
    />
  </List>
);

export const ReviewSettingShow = (props) => (
  <Show title={<ReviewSettingTitle />} {...props}>
      <SimpleShowLayout>
      <TextField source="id" />
      <BooleanField source="detailed" headerStyle={{ textAlign: 'left' }} elStyle={{ float: 'left' }}/>
      <ReferenceField source="ratingSetting.id" reference="RatingSetting" linkType="show" sortable={false}>
        <TextField source="name" />
      </ReferenceField>
      <BooleanField source="active" headerStyle={{ textAlign: 'left' }} elStyle={{ float: 'left' }} />
      </SimpleShowLayout>
  </Show>
);

const ReviewSettingTitle = translate(({ record, translate }) =>  
  <span>{translate('resources.ReviewSetting.name', { smart_count: 1 })} {record.name}</span>
);

export const ReviewSettingEdit = (props) => (
  <Edit title={<ReviewSettingTitle />} {...props}>
    <SimpleForm>
      <DisabledInput source="id"  />
      <NullableBooleanInput  source="detailed" allowEmpty={false} validate={required} />
      <ReferenceField source="ratingSetting.id" reference="RatingSetting" linkType="show" sortable={false}>
        <TextField source="name" />
      </ReferenceField>
      <NullableBooleanInput  source="active" allowEmpty={false} validate={required} />
    </SimpleForm>
  </Edit>
);

export const ReviewSettingCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
    <NullableBooleanInput  source="detailed" allowEmpty={false} validate={required} />
    <ReferenceInput source="ratingSetting.id" reference="RatingSetting" allowEmpty validate={required}>
      <SelectInput optionText="name" />
    </ReferenceInput>
    <NullableBooleanInput  source="active" allowEmpty={false} validate={required} />
    </SimpleForm>
  </Create>
);
