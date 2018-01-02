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
  Responsive,
  SimpleList,
  BooleanField,
  NullableBooleanInput } from 'admin-on-rest';
import reviewCategorySettingIcon from 'material-ui/svg-icons/action/settings';  

export const ReviewCategorySettingIcon = reviewCategorySettingIcon;

const ReviewCategorySettingPagination = () => {
    return ""
}

export const ReviewCategorySettingList = (props) => (
  <List {...props} pagination={<ReviewCategorySettingPagination />}>
    <Responsive
      small={
        <SimpleList
            primaryText={record => record.reviewSetting.name}
            secondaryText={record => record.categorySetting.id}
            tertiaryText={record => record.id}
        />
      }
      medium={
        <Datagrid bodyOptions={{ showRowHover: true }}>
          <TextField source="id" sortable={false} />
          <ReferenceField source="categorySetting.id" reference="CategorySetting" linkType="show" sortable={false}>
            <TextField source="name" />
          </ReferenceField>
          <ReferenceField source="reviewSetting.id" reference="ReviewSetting" linkType="show" sortable={false}>
            <TextField source="id" />
          </ReferenceField>
          <BooleanField source="active" sortable={false} />
          <ShowButton />
        </Datagrid>
      }
    />
  </List>
);

export const ReviewCategorySettingShow = (props) => (
  <Show title={<ReviewCategorySettingTitle />} {...props}>
      <SimpleShowLayout>
      <TextField source="id" />
      <ReferenceField source="reviewSetting.id" reference="ReviewSetting" linkType="show" >
        <TextField source="id" />
      </ReferenceField>
      <ReferenceField source="categorySetting.id" reference="CategorySetting" linkType="show" >
        <TextField source="name" />
      </ReferenceField>
      <BooleanField source="active" headerStyle={{ textAlign: 'left' }} elStyle={{ float: 'left' }} />
      </SimpleShowLayout>
  </Show>
);

const ReviewCategorySettingTitle = translate(({ record, translate }) =>  
  <span>{translate('resources.ReviewCategorySetting.name', { smart_count: 1 })} {record.name}</span>
);

export const ReviewCategorySettingEdit = (props) => (
  <Edit title={<ReviewCategorySettingTitle />} {...props}>
    <SimpleForm>
      <DisabledInput source="id"  />
      <ReferenceInput source="reviewSetting.id" reference="ReviewSetting" allowEmpty validate={required}>
        <SelectInput optionText="id" />
      </ReferenceInput>
      <ReferenceInput source="categorySetting.id" reference="CategorySetting" allowEmpty validate={required}>
        <SelectInput optionText="name" />
      </ReferenceInput>
      <NullableBooleanInput  source="active" allowEmpty={false} validate={required} />
    </SimpleForm>
  </Edit>
);

export const ReviewCategorySettingCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      <ReferenceInput source="reviewSetting.id" reference="ReviewSetting" allowEmpty validate={required}>
        <SelectInput optionText="id" />
      </ReferenceInput>
      <ReferenceInput source="categorySetting.id" reference="CategorySetting" allowEmpty validate={required}>
        <SelectInput optionText="id" />
      </ReferenceInput>
      <NullableBooleanInput  source="active" allowEmpty={false} validate={required} />
    </SimpleForm>
  </Create>
);
