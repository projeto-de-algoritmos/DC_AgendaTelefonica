import React, {useState} from 'react';
import { IoMdSettings } from 'react-icons/io';

import { Button, Dropdown, DropButton } from './styles';

interface IProps {
  searchName: boolean;
  setSearchName: any;
  searchNumber: boolean;
  setSearchNumber: any;
}

const DropdownButton: React.FC<IProps> = ({
    searchName, 
    setSearchName, 
    searchNumber, 
    setSearchNumber
  }) => {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <>
      <Button style={{marginRight: 10}} onClick={()=>{setIsVisible(!isVisible)}}>
        <IoMdSettings size={30} />
      </Button>
      {isVisible &&
        <Dropdown>
          <DropButton 
            type="button" 
            isActive={searchName}
            onClick={()=>{setSearchName(!searchName); setSearchNumber(!searchNumber)}}
          >
            Pesquisar nome
          </DropButton>
          <DropButton 
            type="button" 
            isActive={searchNumber}
            onClick={()=>{setSearchName(!searchName); setSearchNumber(!searchNumber)}}
          >
            Pesquisar telefone
          </DropButton>
        </Dropdown>
      }
    </>
  );
};

export default DropdownButton;
