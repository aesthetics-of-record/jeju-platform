import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Image from 'next/image';
import SRImage from './SRImage';
import { Card, CardContent } from './ui/card';
import NonSRImage from './NonSRImage';

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
        <Tabs defaultValue='nonSR' className='w-[1050px] mt-4'>
          <TabsList className='grid w-full grid-cols-2'>
            <TabsTrigger value='nonSR'>이미지(1000x1000)</TabsTrigger>
            <TabsTrigger value='SR'>증강이미지(4000x4000)</TabsTrigger>
          </TabsList>
          <TabsContent value='nonSR'>
            <Card>
              <CardContent className='space-y-2'>
                <NonSRImage index={index} />
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value='SR'>
            <Card>
              <CardContent className='space-y-2'>
                <SRImage index={index} />
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
        <div className='scrollbar'></div>
      </DialogContent>
    </Dialog>
  );
};

export default DialogButton;
