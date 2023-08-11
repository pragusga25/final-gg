import { GetCommentsData, GetProductsData } from '@/types';

export const parseProductsData = (data: GetProductsData) => {
  return data.map(({ link, ...rest }) => ({
    ...rest,
    link: link.includes('https://') ? link : `https://www.tokopedia.com${link}`,
    formattedPriceIdr: new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
    }).format(rest.price),
  }));
};

export const parseCommentsData = (
  data: GetCommentsData,
  currentUserName?: string
) => {
  return data.map(({ timestamp, ...rest }, idx) => {
    const isLastComment = idx === data.length - 1;
    const time = new Date(timestamp);
    const isToday =
      time.toLocaleDateString() === new Date().toLocaleDateString();

    const showTime = isToday
      ? time.toLocaleTimeString('en-US', {
          hour: 'numeric',
          minute: 'numeric',
        })
      : time.toLocaleDateString('en-US', {
          month: 'short',
          day: 'numeric',
          year: 'numeric',
          hour: 'numeric',
          minute: 'numeric',
        });

    const isMine = currentUserName === rest.username;

    return {
      ...rest,
      timestamp,
      showTime,
      isLastComment,
      isMine,
    };
  });
};
