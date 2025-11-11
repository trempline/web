import { Injectable } from '@angular/core';
import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { environment } from '../../environments/environment';

export interface NewsletterMessage {
  prenom: string;
  nom: string;
  email: string;
  message: string;
}

@Injectable({
  providedIn: 'root'
})
export class SupabaseService {
  private supabase: SupabaseClient;

  constructor() {
    this.supabase = createClient(
      environment.supabase.url,
      environment.supabase.anonKey
    );
  }

  async submitMessage(data: NewsletterMessage) {
    try {
      const { data: result, error } = await this.supabase
        .from('tjs_messages')
        .insert([
          {
            prenom: data.prenom,
            nom: data.nom,
            email: data.email,
            message: data.message,
            created_at: new Date().toISOString()
          }
        ])
        .select();

      if (error) {
        console.error('Error inserting data:', error);
        throw error;
      }

      return { success: true, data: result };
    } catch (error) {
      console.error('Exception in submitMessage:', error);
      return { success: false, error };
    }
  }
}

