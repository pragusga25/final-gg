import {
  GetCommentData,
  GetCommentsData,
  GetProductsData,
  GetUserData,
} from '@/types';

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

export const parseUserData = (data: GetUserData) => {
  return {
    ...data,
    uAvatar: data.username.slice(0, 2).toUpperCase(),
    hasImage: !!data.image,
  };
};

export const parseCommentData = (
  data: GetCommentData,
  currentUsername?: string
) => {
  const { timestamp, user, ...rest } = data;
  const time = new Date(timestamp);
  const isToday = time.toLocaleDateString() === new Date().toLocaleDateString();

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

  const isMine = currentUsername === user.username;

  return {
    ...rest,
    timestamp,
    showTime,
    isMine,
    uAvatar: user.username.slice(0, 2).toUpperCase(),
    ...user,
  };
};

export const parseCommentsData = (
  data: GetCommentsData,
  currentUsername?: string
) => {
  return data.map(({ timestamp, ...rest }, idx) => {
    const isLastComment = idx === data.length - 1;
    const parsedComment = parseCommentData(
      { ...rest, timestamp },
      currentUsername
    );

    return {
      ...parsedComment,
      isLastComment,
    };
  });
};
