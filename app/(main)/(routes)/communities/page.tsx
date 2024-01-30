import CommunityCard from '@/components/cards/CommunityCard';
import UserCard from '@/components/cards/UserCard';
import { fetchCommunities } from '@/lib/actions/community.actions';
import { fetchUser, fetchUsers } from '@/lib/actions/user.actions';
import { currentUser } from '@clerk/nextjs';
import { redirect } from 'next/navigation';

async function Page() {
  const user = await currentUser();

  if (!user) return null;

  const userInfo = await fetchUser(user.id);
  if (!userInfo?.onboarded) redirect('/onboarding');

  //Fetch communities
  const result = await fetchCommunities({
    pageSize: 25,
    pageNumber: 1,
    searchString: '',
  });

  return (
    <section>
      <h1 className='head-text'>Communities</h1>

      {/* Search Bar */}

      <div className='mt-14 flex gap-9'>
        {result.communities.length === 0 ? (
          <p className='no-result'>No Communities</p>
        ): (
          <>
          {result.communities.map((community) => (
            <CommunityCard
            key={community.id}
            id={community.id}
            name={community.name}
            username={community.username}
            imgUrl={community.image}
            bio={community.bio}
            members={community.members}
            />
          ))}
          </>
        )}
      </div>
    </section>
  );
}

export default Page;
