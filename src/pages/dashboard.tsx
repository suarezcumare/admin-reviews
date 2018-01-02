import React from 'react';
import { Card, CardHeader, CardText } from 'material-ui/Card';
import { translate } from 'admin-on-rest';

export default translate(({ style, translate }) => (
    <Card style={{ margin: '2em' }}>
        <CardHeader title={translate('dashboard.welcome')} />
        <CardText> {translate('dashboard.text')} </CardText>
    </Card>
));
