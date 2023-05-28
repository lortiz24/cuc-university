import React, { ReactNode } from 'react';
import { Grid } from '@mui/material';
import Image from 'next/image';
import FormComponent from './FormContactUs';

type ComponentWithImageProps = {
  component?: ReactNode;
  image?: string;
};

const ComponentWithImage: React.FC<ComponentWithImageProps> = ({
  component = <FormComponent TextFieldMessage={false} onSubmit={() => {}} />,
  image = '/assets/Alumno1-2.png',
}) => {
  return (
    <Grid container alignItems="center">
      <Grid item xs={12} md={6}>
        {component}
      </Grid>
      <Grid item xs={12}  md={6} position="relative">
        <div className="image-container">
          <Image
            src={image}
            alt="aluma1"
            width={700}
            height={0}
            sizes="100vw"
            style={{
              position: 'absolute',
              top: '1rem', // Ajusta el valor según la distancia vertical deseada
            }}
          />
        </div>
      </Grid>

    </Grid>
  );
};

export default ComponentWithImage;
