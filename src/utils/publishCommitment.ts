import { SymmetricKey, StorageUploader, WalletClient, Utils, PushDrop, TopicBroadcaster, Transaction, AuthFetch, StorageUtils, LookupResolver } from '@bsv/sdk'
import constants from '../constants'

export async function publishCommitment({
  file,
  name,
  description,
  satoshis,
  publicKey,
  expiration,
  coverImage,
  setStatusText
}: {
  file: File,
  name: string,
  description: string,
  satoshis: number,
  publicKey: string,
  expiration: number,
  coverImage: File,
  setStatusText: (text: string) => void
}): Promise<void> {
  throw 'TODO follow the Frontend Uploading quickstart for Metanet Marketplace for 3d Objects'
}