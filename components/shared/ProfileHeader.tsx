import Image from 'next/image';
import { Button } from '../ui/button';

interface Props {
  accountId: string;
  authUserId: string;
  name: string;
  username: string;
  imgUrl: string;
  bio: string;
}

const ProfileHeader = ({
  accountId,
  authUserId,
  name,
  username,
  imgUrl,
  bio,
}: Props) => {
  return (
    <div className='flex w-full flex-col justify-start'>
      <div className='flex items-center justify-between'>
        <div className='flex items-center gap-4'>
          <div className='relative h-20 w-20 object-cover'>
            <Image
              src={imgUrl}
              alt='Profile Image'
              fill
              className='rounded-full object-cover shadow-2xl'
            />
          </div>

          <div className='flex-1'>
            <div className='flex gap-5'>
              <h2 className='text-left text-heading3-bold text-light-1'>
                {name}
              </h2>
              {/* TODO: Follow/Unfollow logic */}
              <Button className='profile-header_btn'>
                {authUserId === accountId ? 'Edit Profile' : 'Follow'}
              </Button>
            </div>
            <p className='text-base-medium text-gray-1'>@{username}</p>
          </div>
        </div>
      </div>
      {/* TODO: Community */}

      <p className='mt-6 max-w-lg-text-base-regular text-light-2'>{bio}</p>

      <div className='flex items-center gap-5 mt-5'>
        <p className='text-base-regular text-gray-1'>
          <span className='profile-follower-count'>0</span> Followers
        </p>
        <p className='text-base-medium text-gray-1'>
          <span className='profile-thread-count'>0</span> Threads
        </p>
      </div>

      <div className='mt-5 h-0.5 w-full bg-dark-3'></div>
    </div>
  );
};

export default ProfileHeader;
