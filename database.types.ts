export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json }
  | Json[]

export interface Database {
  graphql_public: {
    Tables: {
      [_ in never]: never
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      graphql: {
        Args: {
          operationName?: string
          query?: string
          variables?: Json
          extensions?: Json
        }
        Returns: Json
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
  public: {
    Tables: {
      categories: {
        Row: {
          category_name: string
          created_at: string | null
          id: number
          updated_at: string | null
        }
        Insert: {
          category_name: string
          created_at?: string | null
          id?: number
          updated_at?: string | null
        }
        Update: {
          category_name?: string
          created_at?: string | null
          id?: number
          updated_at?: string | null
        }
        Relationships: []
      }
      colors: {
        Row: {
          color_code: string | null
          color_name: string
          created_at: string | null
          id: number
        }
        Insert: {
          color_code?: string | null
          color_name: string
          created_at?: string | null
          id?: number
        }
        Update: {
          color_code?: string | null
          color_name?: string
          created_at?: string | null
          id?: number
        }
        Relationships: []
      }
      incoming_history: {
        Row: {
          created_at: string | null
          id: number
          Incoming_date_time: string | null
          Incoming_quantity: number
          inventory_id: number | null
        }
        Insert: {
          created_at?: string | null
          id?: number
          Incoming_date_time?: string | null
          Incoming_quantity?: number
          inventory_id?: number | null
        }
        Update: {
          created_at?: string | null
          id?: number
          Incoming_date_time?: string | null
          Incoming_quantity?: number
          inventory_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "incoming_history_inventory_id_fkey"
            columns: ["inventory_id"]
            referencedRelation: "inventory"
            referencedColumns: ["id"]
          }
        ]
      }
      inventory: {
        Row: {
          color_id: number | null
          created_at: string | null
          id: number
          product_id: string | null
          quantity: number
          size_id: number | null
        }
        Insert: {
          color_id?: number | null
          created_at?: string | null
          id?: number
          product_id?: string | null
          quantity?: number
          size_id?: number | null
        }
        Update: {
          color_id?: number | null
          created_at?: string | null
          id?: number
          product_id?: string | null
          quantity?: number
          size_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "inventory_color_id_fkey"
            columns: ["color_id"]
            referencedRelation: "colors"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "inventory_product_id_fkey"
            columns: ["product_id"]
            referencedRelation: "products"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "inventory_size_id_fkey"
            columns: ["size_id"]
            referencedRelation: "sizes"
            referencedColumns: ["id"]
          }
        ]
      }
      outgoing_history: {
        Row: {
          created_at: string | null
          id: number
          Inventory_id: number | null
          outgoing_date_time: string | null
          outgoing_quantity: number | null
        }
        Insert: {
          created_at?: string | null
          id?: number
          Inventory_id?: number | null
          outgoing_date_time?: string | null
          outgoing_quantity?: number | null
        }
        Update: {
          created_at?: string | null
          id?: number
          Inventory_id?: number | null
          outgoing_date_time?: string | null
          outgoing_quantity?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "outgoing_history_Inventory_id_fkey"
            columns: ["Inventory_id"]
            referencedRelation: "inventory"
            referencedColumns: ["id"]
          }
        ]
      }
      prices: {
        Row: {
          color_id: number | null
          created_at: string | null
          id: number
          price: number
          product_id: string | null
          size_id: number | null
        }
        Insert: {
          color_id?: number | null
          created_at?: string | null
          id?: number
          price?: number
          product_id?: string | null
          size_id?: number | null
        }
        Update: {
          color_id?: number | null
          created_at?: string | null
          id?: number
          price?: number
          product_id?: string | null
          size_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "prices_color_id_fkey"
            columns: ["color_id"]
            referencedRelation: "colors"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "prices_product_id_fkey"
            columns: ["product_id"]
            referencedRelation: "products"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "prices_size_id_fkey"
            columns: ["size_id"]
            referencedRelation: "sizes"
            referencedColumns: ["id"]
          }
        ]
      }
      products: {
        Row: {
          created_at: string | null
          id: string
          product_name: string | null
          product_number: string | null
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          id?: string
          product_name?: string | null
          product_number?: string | null
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          id?: string
          product_name?: string | null
          product_number?: string | null
          updated_at?: string | null
        }
        Relationships: []
      }
      sizes: {
        Row: {
          created_at: string | null
          id: number
          size_name: string
        }
        Insert: {
          created_at?: string | null
          id?: number
          size_name: string
        }
        Update: {
          created_at?: string | null
          id?: number
          size_name?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
  storage: {
    Tables: {
      buckets: {
        Row: {
          allowed_mime_types: string[] | null
          avif_autodetection: boolean | null
          created_at: string | null
          file_size_limit: number | null
          id: string
          name: string
          owner: string | null
          public: boolean | null
          updated_at: string | null
        }
        Insert: {
          allowed_mime_types?: string[] | null
          avif_autodetection?: boolean | null
          created_at?: string | null
          file_size_limit?: number | null
          id: string
          name: string
          owner?: string | null
          public?: boolean | null
          updated_at?: string | null
        }
        Update: {
          allowed_mime_types?: string[] | null
          avif_autodetection?: boolean | null
          created_at?: string | null
          file_size_limit?: number | null
          id?: string
          name?: string
          owner?: string | null
          public?: boolean | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "buckets_owner_fkey"
            columns: ["owner"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      migrations: {
        Row: {
          executed_at: string | null
          hash: string
          id: number
          name: string
        }
        Insert: {
          executed_at?: string | null
          hash: string
          id: number
          name: string
        }
        Update: {
          executed_at?: string | null
          hash?: string
          id?: number
          name?: string
        }
        Relationships: []
      }
      objects: {
        Row: {
          bucket_id: string | null
          created_at: string | null
          id: string
          last_accessed_at: string | null
          metadata: Json | null
          name: string | null
          owner: string | null
          path_tokens: string[] | null
          updated_at: string | null
          version: string | null
        }
        Insert: {
          bucket_id?: string | null
          created_at?: string | null
          id?: string
          last_accessed_at?: string | null
          metadata?: Json | null
          name?: string | null
          owner?: string | null
          path_tokens?: string[] | null
          updated_at?: string | null
          version?: string | null
        }
        Update: {
          bucket_id?: string | null
          created_at?: string | null
          id?: string
          last_accessed_at?: string | null
          metadata?: Json | null
          name?: string | null
          owner?: string | null
          path_tokens?: string[] | null
          updated_at?: string | null
          version?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "objects_bucketId_fkey"
            columns: ["bucket_id"]
            referencedRelation: "buckets"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "objects_owner_fkey"
            columns: ["owner"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      can_insert_object: {
        Args: {
          bucketid: string
          name: string
          owner: string
          metadata: Json
        }
        Returns: undefined
      }
      extension: {
        Args: {
          name: string
        }
        Returns: string
      }
      filename: {
        Args: {
          name: string
        }
        Returns: string
      }
      foldername: {
        Args: {
          name: string
        }
        Returns: unknown
      }
      get_size_by_bucket: {
        Args: Record<PropertyKey, never>
        Returns: {
          size: number
          bucket_id: string
        }[]
      }
      search: {
        Args: {
          prefix: string
          bucketname: string
          limits?: number
          levels?: number
          offsets?: number
          search?: string
          sortcolumn?: string
          sortorder?: string
        }
        Returns: {
          name: string
          id: string
          updated_at: string
          created_at: string
          last_accessed_at: string
          metadata: Json
        }[]
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
