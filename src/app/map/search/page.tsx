'use client';

import DialogButton from '@/components/DialogButton';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React, { useEffect, useRef, useState } from 'react';
import { FaSearchLocation } from 'react-icons/fa';

const Map = () => {
  const imageUrl = '/PNG/0.png';
  const canvasRef = useRef(null);
  const router = useRouter();
  const [hover, setHover] = useState<number>(-1);

  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [startY, setStartY] = useState(0);
  const [offsetX, setOffsetX] = useState(0);
  const [offsetY, setOffsetY] = useState(0);

  const boxRef: any = useRef(null);
  const overlayRef: any = useRef(null);

  const scrollHorizontally = (distance: number) => {
    if (boxRef.current) {
      boxRef.current.scrollLeft += distance;
    }
  };

  const scrollVertically = (distance: number) => {
    if (boxRef.current) {
      boxRef.current.scrollTop += distance;
    }
  };

  const drawImage = (image: any) => {
    const canvas: any = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    if (ctx) {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      canvas.width = image.width;
      canvas.height = image.height;

      overlayRef.width = image.width;
      overlayRef.height = image.height;

      ctx.drawImage(image, offsetX, offsetY);
    }
  };

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    setIsDragging(true);
    setStartX(e.clientX);
    setStartY(e.clientY);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isDragging) {
      const dx = e.clientX - startX;
      const dy = e.clientY - startY;
      setStartX(e.clientX);
      setStartY(e.clientY);

      scrollHorizontally(-dx);
      scrollVertically(-dy);
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    setHover(-1);
  };

  // 오른쪽 클릭 이벤트를 막는 핸들러 함수
  const handleContextMenu = (e: any) => {
    // 기본 동작 방지
    e.preventDefault();
  };

  return (
    <div className='w-full p-6'>
      <header className=''>
        <h1 className='font-black text-4xl'>JEJU-SEARCH</h1>
        <p className='text-sm text-slate-700 dark:text-slate-400'></p>
        <div className='h-4' />
        <Button
          className='px-6'
          size={'default'}
          onClick={() => {
            router.refresh();
          }}
        >
          새로고침
        </Button>

        <div className='h-4' />

        <Separator className='bg-slate-300 dark:bg-slate-700' />
      </header>
      <div className='flex w-full'>
        <div
          className=' overflow-auto mt-16 scrollbar relative grid min-w-[700px] max-w-[1000px]'
          style={{ gridTemplateColumns: 'repeat(24, minmax(0, 1fr))' }}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onContextMenu={handleContextMenu}
          onMouseOut={handleMouseUp}
        >
          {Array.from({ length: 450 }).map((_, index) => {
            return (
              <>
                {(index + 1) % 25 === 0 ? null : (
                  <DialogButton index={index}>
                    <Image
                      src={`/PNG/${index}.png`}
                      alt='image'
                      width={50}
                      height={50}
                      onMouseOver={() => {
                        console.log(hover);
                        setHover(index);
                      }}
                    />
                  </DialogButton>
                )}
              </>
            );
          })}
        </div>
        <aside className='p-4'>
          <Card className='w-[500px] m-auto'>
            <CardContent className='mt-4'>
              <div>
                {hover === -1 ? null : (
                  <Image
                    src={`/PNG/${hover}.png`}
                    alt='image'
                    width={1000}
                    height={1000}
                  />
                )}
              </div>
            </CardContent>
          </Card>
        </aside>
      </div>
    </div>
  );
};

export default Map;
