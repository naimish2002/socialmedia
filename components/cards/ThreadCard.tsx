import Image from 'next/image';
import Link from 'next/link';

interface Props {
  id: string;
  currentUserId: string;
  parentId: string | null;
  content: string;
  author: {
    name: string;
    image: string;
    id: string;
  };
  community: {
    id: string;
    name: string;
    image: string;
  } | null;
  createdAt: string;
  comments: {
    author: {
      image: string;
    };
  }[];
  isComment?: boolean;
}

const ThreadCard = ({
  id,
  currentUserId,
  parentId,
  content,
  author,
  community,
  createdAt,
  comments,
  isComment,
}: Props) => {
  return (
    <article
      className={`flex w-full flex-col rounded-2xl ${
        isComment ? 'px-0 xs:px-7' : 'bg-dark-3 px-3 py-5'
      }`}>
      <div className='flex items-start justify-between'>
        <div className='flex w-full flex-1 flex-row gap-4'>
          <div className='flex flex-col items-center'>
            <Link href={`/profile/${author.id}`} className='relative h-11 w-11'>
              <Image
                src={author.image}
                alt='Profile Image'
                fill
                className='cursor-pointer rounded-full object-cover'
              />
            </Link>

            <div className='thread-card_bar' />
          </div>
          <div className='flex flex-col w-full'>
            <Link href={`/profile/${author.id}`} className='w-fit '>
              <h4 className='cursor-pointer text-base-semibold text-light-1'>
                {author?.name}
              </h4>
            </Link>
            <p className='mt-2 text-small-regular text-light-2'>{content}</p>
            <div className={`${isComment && 'mb-6'} mt-5 flex flex-col gap-3`}>
            <div className='flex gap-3.5'>
  <img
    src='/assets/heart-gray.svg'
    alt='Heart Icon'
    width={24}
    height={24}
    className='cursor-pointer object-contain'
  />

  <Link href={`/thread/${id}`}>
    <img
      src='/assets/reply.svg'
      alt='Reply Icon'
      width={24}
      height={24}
      className='cursor-pointer object-contain'
    />
  </Link>

  <img
    src='/assets/repost.svg'
    alt='Repost Icon'
    width={24}
    height={24}
    className='cursor-pointer object-contain'
  />

<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet" className='cursor-pointer object-contain'>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M17.2455 5.16488C16.4098 5.31354 15.2831 5.68758 13.7019 6.21465L10.1224 7.40781C8.85099 7.83163 7.93007 8.13906 7.27962 8.41571C6.59957 8.70495 6.35765 8.90656 6.27908 9.04171C6.03708 9.45799 6.03708 9.97211 6.27908 10.3884C6.35765 10.5235 6.59957 10.7251 7.27961 11.0144C7.93007 11.291 8.85099 11.5985 10.1224 12.0223C10.1425 12.029 10.1623 12.0356 10.1819 12.0421C10.5292 12.1576 10.7992 12.2474 11.0314 12.4029C11.2551 12.5527 11.4473 12.7449 11.5971 12.9686C11.7526 13.2008 11.8424 13.4708 11.9579 13.8181C11.9644 13.8377 11.971 13.8575 11.9777 13.8776C12.4015 15.149 12.709 16.0699 12.9856 16.7204C13.2749 17.4004 13.4765 17.6423 13.6116 17.7209C14.0279 17.9629 14.542 17.9629 14.9583 17.7209C15.0934 17.6423 15.295 17.4004 15.5843 16.7204C15.8609 16.0699 16.1684 15.149 16.5922 13.8776L17.7853 10.2981C18.3124 8.71688 18.6865 7.59019 18.8351 6.75449C18.9845 5.91482 18.8703 5.55814 18.6561 5.3439C18.4419 5.12966 18.0852 5.01551 17.2455 5.16488ZM17.0533 4.08426C17.9834 3.9188 18.8211 3.95672 19.4322 4.56779C20.0433 5.17886 20.0812 6.01659 19.9157 6.94673C19.7513 7.87125 19.3502 9.07439 18.8424 10.5976L17.6246 14.251C17.2115 15.4906 16.8904 16.4538 16.5943 17.15C16.3087 17.8215 15.9916 18.3898 15.5099 18.6698C14.7526 19.1101 13.8173 19.1101 13.06 18.6698C12.5783 18.3898 12.2612 17.8215 11.9756 17.15C11.6795 16.4538 11.3585 15.4907 10.9453 14.2511L10.9365 14.2247C10.7917 13.7904 10.7476 13.6726 10.6851 13.5792C10.6151 13.4747 10.5253 13.3849 10.4208 13.3149C10.3274 13.2524 10.2096 13.2083 9.77535 13.0635L9.7489 13.0547C8.50933 12.6415 7.54616 12.3205 6.85003 12.0244C6.17855 11.7388 5.61022 11.4217 5.3302 10.94C4.88993 10.1827 4.88993 9.24739 5.3302 8.49008C5.61022 8.0084 6.17855 7.69129 6.85003 7.40569C7.54617 7.10961 8.50935 6.78855 9.74894 6.37536L13.4024 5.15755C14.9256 4.64979 16.1288 4.24873 17.0533 4.08426ZM16.9148 7.08951C17.1279 7.30501 17.126 7.65248 16.9105 7.86561L13.9836 10.7602C13.7681 10.9734 13.4206 10.9714 13.2075 10.7559C12.9944 10.5404 12.9963 10.193 13.2118 9.97983L16.1387 7.08521C16.3542 6.87209 16.7017 6.87401 16.9148 7.08951Z" fill="#5C5C7B"/>
</svg>
</div>


              {isComment && comments.length > 0 && (
                <Link href={`/thread/${id}`}>
                  <p className='mt-1 text-subtle-medium text-gray-1'>
                    {comments.length} replies
                  </p>
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default ThreadCard;
