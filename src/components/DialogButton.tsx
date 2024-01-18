import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import Image from 'next/image';

const DialogButton = ({
  children,
  index,
}: {
  children: React.ReactNode;
  index?: number;
}) => {
  return (
    <Dialog>
      <DialogTrigger>{children}</DialogTrigger>
      <DialogContent className='w-[1100px] h-[1100px]'>
        <DialogHeader>
          <DialogTitle>이미지</DialogTitle>
          <DialogDescription>확대 이미지 입니다.</DialogDescription>
        </DialogHeader>
        <div className='scrollbar'>
          <div>
            <Image
              className='mx-auto'
              src={`/PNG/${index}.png`}
              alt='확대이미지'
              width={1000}
              height={1000}
            ></Image>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default DialogButton;
