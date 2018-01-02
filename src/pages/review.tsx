import React from 'react';
import { 
  List, 
  Edit,
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
  BooleanField,
  NullableBooleanInput,
  Responsive,
  SimpleList,
  LongTextInput,
  NumberInput } from 'admin-on-rest';

import reviewIcon from 'material-ui/svg-icons/communication/comment';

export const ReviewIcon = reviewIcon;

const ReviewPagination = () => {
    return ""
}

export const ReviewList = (props) => (
  <List {...props} pagination={<ReviewPagination />}>
    <Responsive
      small={
        <SimpleList
            primaryText={record => record.comment}
            secondaryText={record => record.value}
            tertiaryText={record => record.id}
        />
      }
      medium={
        <Datagrid bodyOptions={{ showRowHover: true }}>
          <TextField source="id" sortable={false} />
          <TextField source="comment" sortable={false}/>
          <TextField source="value" sortable={false}/>
          <TextField source="userId" sortable={false}/>
          <TextField source="userName" sortable={false}/>
          <BooleanField source="published" sortable={false} />
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

export const ReviewShow = (props) => (
  <Show title={<ReviewTitle />} {...props}>
      <SimpleShowLayout>
      <TextField source="id" />
      <TextField source="comment" />
      <TextField source="value" />
      <TextField source="userId" />
      <TextField source="userName" />
      <BooleanField source="published" headerStyle={{ textAlign: 'left' }} elStyle={{ float: 'left' }} />
      <ReferenceField source="reviewSetting.id" reference="ReviewSetting" linkType="show" >
        <TextField source="id" />
      </ReferenceField>
      <BooleanField source="active" headerStyle={{ textAlign: 'left' }} elStyle={{ float: 'left' }} />
      </SimpleShowLayout>
  </Show>
);

const ReviewTitle = translate(({ record, translate }) =>  
  <span>{translate('resources.Review.name', { smart_count: 1 })} {record.name}</span>
);

export const ReviewEdit = (props) => (
  <Edit title={<ReviewTitle />} {...props}>
    <SimpleForm>
      <DisabledInput source="id"  />
      <DisabledInput source="userId"  />
      <DisabledInput source="userName"  />
      <DisabledInput source="reviewSettingId"  />
      <DisabledInput source="externalEntityId"  />
      <LongTextInput source="comment" validate={required} />
      <NumberInput source="value" step={1} validate={required}/>
      <NullableBooleanInput  source="published" allowEmpty={false} validate={required} />
      <NullableBooleanInput  source="active" allowEmpty={false} validate={required} />
    </SimpleForm>
  </Edit>
);
