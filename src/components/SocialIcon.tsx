type IconProps = {
  className?: string;
  isLight?: boolean;
};

type SocialIconProps = IconProps & {
  url?: string;
  icon?: string;
};

export const BehanceIcon = (props: IconProps) => {
  return <SocialIcon {...props} icon='behance' url='https://www.behance.net/angellovestodesign' />;
};

export const InstagramIcon = (props: IconProps) => {
  return <SocialIcon {...props} icon='instagram' url='https://www.instagram.com/injil.ux' />;
};

export const LinkedInIcon = (props: IconProps) => {
  return <SocialIcon {...props} icon='linkedin' url='https://www.linkedin.com/in/angelleijendekker' />;
};

export const MediumIcon = (props: IconProps) => {
  return <SocialIcon {...props} icon='medium' url='https://medium.com/@leijendekkerangel' />;
};

export const SocialIcon = (props: SocialIconProps) => {
  const className = props.className ?? 'h-4 w-4';
  const color = props.isLight ? 'white' : 'black';

  return (
    <a className='p-1' href={props.url} target='_blank'>
      <img className={className} src={`/icons/${props.icon}-${color}.png`} alt={`${props.icon} icon`} />
    </a>
  );
};
