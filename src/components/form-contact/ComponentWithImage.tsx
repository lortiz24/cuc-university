import React, { ReactNode } from 'react';
import { Grid } from '@mui/material';
import Image from 'next/image';
import FormComponent from './FormContactUs';

type ComponentWithImageProps = {
  component?: ReactNode;
  image?: string;
};

const ComponentWithImage: React.FC<ComponentWithImageProps> = ({
  component = <FormComponent TextFieldMessage={false} onSubmit={() => { }} />,
  image = '/assets/Alumno1-2.png',
}) => {
  return (
    <Grid container alignItems="center">
      <Grid item xs={12} md={6}>
        {component}
      </Grid>
      <Grid item xs={12} md={6} position="relative">
        <div className="image-container">
          <img
            src={image}
            alt={"students"}
            style={{
              width: '100%',
              height: 'auto',
              position: 'absolute',
              top: '1rem',
            }}
          />
        </div>
      </Grid>

    </Grid>
  );
};

export default ComponentWithImage;
