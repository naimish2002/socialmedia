import { fetchUser, getNotifications } from '@/lib/actions/user.actions';
import { currentUser } from '@clerk/nextjs';
import Image from 'next/image';
import Link from 'next/link';
import { redirect } from 'next/navigation';

async function Page() {
  const user = await currentUser();

  if (!user) return null;

  const userInfo = await fetchUser(user.id);
  if (!userInfo?.onboarded) redirect('/onboarding');

  //Get Notifications
  const notifications = await getNotifications(userInfo._id);

  return (
    <section>
      <h1 className='head-text'>Notifications</h1>

      <section className='mt-10 flex flex-col gap-5'>
        {notifications.length > 0 ? (
          <>
            {notifications.map((notification) => (
              <Link
                key={notification._id}
                href={`/thread/${notification.parentId}`}>
                <article className='activity-card'>
                  <Image
                    src={notification.author.image}
                    alt='Profile Picture'
                    width={20}
                    height={20}
                    className='rounded-full object-cover h-10 w-10'
                  />
                  <p className='!text-small-regular text-light-1'>
                    <Link href={`/profile/${notification.author.id}`}>
                      <span className='mr-1 text-secondary-500-500 text-base-medium hover:underline'>
                        {notification.author.username}
                      </span>
                    </Link>{' '}
                    {''}
                    replied to your thread
                  </p>
                </article>
              </Link>
            ))}
          </>
        ) : (
          <p className='!text-base-regular text-light-3'>No Notifications.</p>
        )}
      </section>
    </section>
  );
}

export default Page;
