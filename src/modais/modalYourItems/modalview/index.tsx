import { DefaultModal } from '../../../components/modalDafault';

interface Props {
  showItem: boolean;
  setShowItem: React.Dispatch<React.SetStateAction<boolean>>;
}

export const ModalViewItems = ({ showItem, setShowItem }: Props) => {
  return (
    <div className="container-item">
      {showItem && (
        <DefaultModal callback={() => setShowItem(false)}>
          <div>Test</div>
          <button> Teste 2</button>
        </DefaultModal>
      )}
    </div>
  );
};
