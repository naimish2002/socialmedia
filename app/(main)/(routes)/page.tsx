import ThreadCard from '@/components/cards/ThreadCard';
import { fetchThread } from '@/lib/actions/thread.actions';
import { currentUser } from '@clerk/nextjs';

export default async function Home() {
  const result = await fetchThread(1, 30);

  const user = await currentUser();

  return (
    <div>
      <h1 className='head-text max-md:hidden'>Home</h1>

      <section className='flex flex-col gap-7 mt-5 max-md:mt-0'>
        {result.threads.length === 0 ? (
          <p className='no-result'>No threads found.</p>
        ) : (
          <>
            {result.threads.map((thread) => (
              <ThreadCard
                key={thread._id}
                id={thread._id}
                currentUserId={user?.id || ''}
                parentId={thread.parentId}
                content={thread.text}
                author={thread.author}
                community={thread.community}
                createdAt={thread.createdAt}
                comments={thread.children}
              />
            ))}
          </>
        )}
      </section>
    </div>
  );
}
