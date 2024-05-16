import { SvgIcon, SvgIconProps } from "@mui/material";

export interface IconProps extends SvgIconProps { }

const BookPlaceHolder = (props: IconProps) => {
  return (
    <SvgIcon {...props}><path d="M4.727 2.712c.306-.299.734-.494 1.544-.6C7.105 2.002 8.209 2 9.793 2h4.414c1.584 0 2.688.002 3.522.112.81.106 1.238.301 1.544.6.305.3.504.72.613 1.513.112.817.114 1.899.114 3.45v7.839H7.346c-.903 0-1.519-.001-2.047.138-.472.124-.91.326-1.299.592V7.676c0-1.552.002-2.634.114-3.451.109-.793.308-1.213.613-1.513Zm2.86 3.072a.82.82 0 0 0-.828.81c0 .448.37.811.827.811h8.828a.82.82 0 0 0 .827-.81.82.82 0 0 0-.827-.811H7.586Zm-.828 4.594c0-.447.37-.81.827-.81h5.517a.82.82 0 0 1 .828.81.82.82 0 0 1-.828.811H7.586a.82.82 0 0 1-.827-.81Z" clipRule="evenodd" /><path d="M7.473 17.135c-1.079 0-1.456.007-1.746.083a2.464 2.464 0 0 0-1.697 1.538c.016.382.043.719.084 1.019.109.793.308 1.213.613 1.513.306.299.734.494 1.544.6.834.11 1.938.112 3.522.112h4.414c1.584 0 2.688-.002 3.522-.111.81-.107 1.238-.302 1.544-.601.216-.213.38-.486.495-.91H7.586a.82.82 0 0 1-.827-.81c0-.448.37-.811.827-.811H19.97c.02-.466.027-1 .03-1.622H7.472Z" /></SvgIcon>
  );
};

export default BookPlaceHolder;
