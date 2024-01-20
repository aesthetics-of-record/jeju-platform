import { Dialog, DialogContent } from '@/components/ui/dialog';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { IoIosImage, IoIosImages } from 'react-icons/io';
import SegYImage from './SegYImage';

const SegYDialog = ({
  openDialog,
  setOpenDialog,
  index,
}: {
  openDialog: boolean;
  setOpenDialog: any;
  index?: number;
}) => {
  return (
    <Dialog
      onOpenChange={(open) => {
        if (open === false) {
          setOpenDialog(false);
        }
      }}
      open={openDialog}
    >
      <DialogContent className='h-[900px]'>
        <Tabs defaultValue='nonSR' className='w-[750px] mt-4 m-auto'>
          <TabsList className='grid w-full grid-cols-2'>
            <TabsTrigger value='1' className='flex gap-2'>
              <IoIosImage size={20} />
              착륙지점
            </TabsTrigger>
            <TabsTrigger value='2' className='flex gap-2' disabled>
              <IoIosImages size={20} />
              착륙박스
            </TabsTrigger>
          </TabsList>
          <TabsContent value='1'>
            <SegYImage index={index} />
          </TabsContent>
          <TabsContent value='2'></TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
};

export default SegYDialog;
