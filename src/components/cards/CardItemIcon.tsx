import React from 'react';
import {Card, CardProps, Image} from 'react-native-elements';

interface CustomCardProps extends CardProps {
  title: string;
  imageSource: {uri: string};
}

const CardItemIcon: React.FC<CustomCardProps> = ({
  title,
  imageSource,
  ...otherProps
}) => {
  return (
    <Card {...otherProps}>
      <Card.Title>{title}</Card.Title>
      <Card.Divider />
      <Image source={imageSource} />
    </Card>
  );
};

export default CardItemIcon;
